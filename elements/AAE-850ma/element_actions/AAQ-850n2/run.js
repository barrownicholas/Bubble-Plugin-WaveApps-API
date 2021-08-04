function(instance, properties, context) {
    fetch('https://gql.waveapps.com/graphql/public', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + 'QT0LwmwP2PCgb9Rr6Sv2PNmmxLJn9d',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
query($businessId: ID!, $page: Int!, $pageSize: Int!, $customerId: ID!) {
  business(id: $businessId) {
    id
    isClassicInvoicing
    invoices(page: $page, pageSize: $pageSize, customerId: $customerId) {
      pageInfo {
        currentPage
        totalPages
        totalCount
      }
      edges {
        node {
          id
          createdAt
          modifiedAt
          pdfUrl
          viewUrl
          status
          title
          subhead
          invoiceNumber
          invoiceDate
          poNumber
          customer {
            id
            name
            # Can add additional customer fields here
          }
          currency {
            code
          }
          dueDate
          amountDue {
            value
            currency {
              symbol
            }
          }
          amountPaid {
            value
            currency {
              symbol
            }
          }
          taxTotal {
            value
            currency {
              symbol
            }
          }
          total {
            value
            currency {
              symbol
            }
          }
          exchangeRate
          footer
          memo
          disableCreditCardPayments
          disableBankPayments
          itemTitle
          unitTitle
          priceTitle
          amountTitle
          hideName
          hideDescription
          hideUnit
          hidePrice
          hideAmount
          items {
            product {
              id
              name
              # Can add additional product fields here
            }
            description
            quantity
            price
            subtotal {
              value
              currency {
                symbol
              }
            }
            total {
              value
              currency {
                symbol
              }
            }
            account {
              id
              name
              subtype {
                name
                value
              }
              # Can add additional account fields here
            }
            taxes {
              amount {
                value
              }
              salesTax {
                id
                name
                # Can add additional sales tax fields here
              }
            }
          }
          lastSentAt
          lastSentVia
          lastViewedAt
        }
      }
    }
  }
}
`,
            variables: {"businessId": "QnVzaW5lc3M6YzRmNzkzYmItMTQ0OS00NGM2LWEwNGUtYmViODk2OWMzOTRk",
                        "page": 1,
                        "pageSize": 100,
                        "customerId": "QnVzaW5lc3M6YzRmNzkzYmItMTQ0OS00NGM2LWEwNGUtYmViODk2OWMzOTRkO0N1c3RvbWVyOjQ4OTI2NjY0"
                       }
        })
    })
        .then(r => r.json())
        .then(data => console.log(data));
}