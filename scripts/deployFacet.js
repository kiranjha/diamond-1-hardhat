async function deployFacet() {
    const FacetA = await ethers.getContractFactory('FacetA');
    const facetA = await FacetA.deploy();
    await facetA.deployed();
    console.log("FacetA deployed :- ",facetA.address);
    
    return facetA.address;
}

//we recommend this pattern to be able to use async/await everywhere and properly handles error
deployFacet().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});