describe("Quotes App", () => {

beforeEach(() => {

cy.visit("http://localhost:1234/")

})


//HELPERS / GETTERS//
//pull in the elements that yoou want to test
// cyntax const _____ = () => cy.get("_(comp.type)[__(name/id/how its identified)__]__")


//Running the test --

it("sanity check to make sure test works", () => {

//"it" is how you initulize a test
//"expect" is an assertion
//there can be multiple assertions per test
//but they all need to relate to the 
//one thing being tested

    expect(1 + 2).to.equal(3);

    expect(2 + 2).not.equal(5) //strict equality-- ===   does not do type coercion

    expect({}).not.to.equal({}) 

    expect({}).to.eql({})

}) 


//CI/CD => Conotinuos Intergration/Continuos Delivery
//when you push code to prod or stage it will push it back if something is wrong



it("the proper eelements are showing", () => {
    textInput().should("exist")
    authorInput().should("exist")
    foobarInput().should("not.exist")
    submitBtn().should("exist")
    cancelBtn().should("exist")
    

//will search through the dom and find where 
//this exisits and return it locatioon to you
// the forward slashes and the i make the search not case sensative
    cy.contains(/submit quote/i).should("exist")
})

})