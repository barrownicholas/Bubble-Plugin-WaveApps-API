function(instance, properties, context) {
    fetch('https://gql.waveapps.com/graphql/public', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + 'QT0LwmwP2PCgb9Rr6Sv2PNmmxLJn9d',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: 'query { user { id defaultEmail } }',
            variables: {}
        })
    })
        .then(r => r.json())
        .then(data => console.log(data));
}