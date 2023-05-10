const ensQuery = `
    query getDomain($address: String!) {
      domains(where: {owner: $address}) {
        name 
      }
    }
  `;

const lensProfileQuery = (address) => {
  return `
      query DefaultProfile {
        defaultProfile(request: { ethereumAddress: "${address}" }) {
          id
          name
          bio
          isDefault
          attributes {
            displayType
            traitType
            key
            value
          }
          followNftAddress
          metadata
          handle
          picture {
            ... on NftImage {
              contractAddress
              tokenId
              uri
              chainId
              verified
            }
            ... on MediaSet {
              original {
                url
                mimeType
              }
            }
          }
          coverPicture {
            ... on NftImage {
              contractAddress
              tokenId
              uri
              chainId
              verified
            }
            ... on MediaSet {
              original {
                url
                mimeType
              }
            }
          }
          ownedBy
          dispatcher {
            address
            canUseRelay
          }
          stats {
            totalFollowers
            totalFollowing
            totalPosts
            totalComments
            totalMirrors
            totalPublications
            totalCollects
          }
          followModule {
            ... on FeeFollowModuleSettings {
              type
              contractAddress
              amount {
                asset {
                  name
                  symbol
                  decimals
                  address
                }
                value
              }
              recipient
            }
            ... on ProfileFollowModuleSettings {
              type
            }
            ... on RevertFollowModuleSettings {
              type
            }
          }
        }
      }
    `;
};

module.exports = {
  ensQuery,
  lensProfileQuery,
};
