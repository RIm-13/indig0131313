/// <reference types="Cypress" />
it ('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in')
})

// it ('By ID', () => {
//     cy.visit("https://arch.x5.ru/auth/realms/ea-tool/protocol/openid-connect/auth?client_id=ea-tool-app&redirect_uri=https%3A%2F%2Farch.x5.ru%2Fbusiness-capability-dashboards&state=7107b713-18bf-4f18-86d3-169fedc9b2a2&response_mode=fragment&response_type=code&scope=openid&nonce=f4890fbe-4544-48e7-9e91-5ef442a78f17")
//     cy.get ('#username')
//     cy.get ('#password')
// })

// it ('By Class', () => {
//     cy.visit("https://arch.x5.ru/auth/realms/ea-tool/protocol/openid-connect/auth?client_id=ea-tool-app&redirect_uri=https%3A%2F%2Farch.x5.ru%2Fbusiness-capability-dashboards&state=7107b713-18bf-4f18-86d3-169fedc9b2a2&response_mode=fragment&response_type=code&scope=openid&nonce=f4890fbe-4544-48e7-9e91-5ef442a78f17")
//     cy.get ('.pf-c-form-control')
// })

// it ('By Tag', () => {
//     cy.visit("https://arch.x5.ru/auth/realms/ea-tool/protocol/openid-connect/auth?client_id=ea-tool-app&redirect_uri=https%3A%2F%2Farch.x5.ru%2Fbusiness-capability-dashboards&state=7107b713-18bf-4f18-86d3-169fedc9b2a2&response_mode=fragment&response_type=code&scope=openid&nonce=f4890fbe-4544-48e7-9e91-5ef442a78f17")
//     cy.get ('input')
// })

// it ('By Tag value', () => {
//     cy.visit("https://arch.x5.ru/auth/realms/ea-tool/protocol/openid-connect/auth?client_id=ea-tool-app&redirect_uri=https%3A%2F%2Farch.x5.ru%2Fbusiness-capability-dashboards&state=7107b713-18bf-4f18-86d3-169fedc9b2a2&response_mode=fragment&response_type=code&scope=openid&nonce=f4890fbe-4544-48e7-9e91-5ef442a78f17")
//     cy.get ('[type="submit"]')
// })

// it ('By Diffent Tag', () => {
//     cy.visit("https://arch.x5.ru/auth/realms/ea-tool/protocol/openid-connect/auth?client_id=ea-tool-app&redirect_uri=https%3A%2F%2Farch.x5.ru%2Fbusiness-capability-dashboards&state=7107b713-18bf-4f18-86d3-169fedc9b2a2&response_mode=fragment&response_type=code&scope=openid&nonce=f4890fbe-4544-48e7-9e91-5ef442a78f17")
//     cy.get ('[type="submit"][value="Sign In"]')
// })

// it ('By Diffent Types', () => {
//     cy.visit("https://arch.x5.ru/auth/realms/ea-tool/protocol/openid-connect/auth?client_id=ea-tool-app&redirect_uri=https%3A%2F%2Farch.x5.ru%2Fbusiness-capability-dashboards&state=7107b713-18bf-4f18-86d3-169fedc9b2a2&response_mode=fragment&response_type=code&scope=openid&nonce=f4890fbe-4544-48e7-9e91-5ef442a78f17")
//     cy.get ('input[tabindex="1"][type="text"]')
// })


// it.only ('By Contains name', () => {
//     cy.visit("https://arch.x5.ru/auth/realms/ea-tool/protocol/openid-connect/auth?client_id=ea-tool-app&redirect_uri=https%3A%2F%2Farch.x5.ru%2Fbusiness-capability-dashboards&state=7107b713-18bf-4f18-86d3-169fedc9b2a2&response_mode=fragment&response_type=code&scope=openid&nonce=f4890fbe-4544-48e7-9e91-5ef442a78f17")
//     cy.get ('*[class^=pf-c-form')
// })

// it ('Using Get with Find and Eq', () => {
//         cy.visit("https://next.privat24.ua/deposit/open")
//         cy.get('tbody').find('td').find('div').find('button').eq('0')
//     })

// it.only ('Using Get with Find and Eq', () => {
// cy.viewport(1800,700)
// cy.visit("https://docs.cypress.io/api/commands/fixture")
// cy.get('main').find('div').find('nav').find('ul').find('li').find('a').eq(0) 
// });