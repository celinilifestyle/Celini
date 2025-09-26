const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CeliniToken", function () {
  it("mints fixed supply to deployer", async () => {
    const [owner] = await ethers.getSigners();
    const Celini = await ethers.getContractFactory("CeliniToken");
    const token = await Celini.deploy();
    const supply = await token.totalSupply();
    expect(await token.balanceOf(owner.address)).to.equal(supply);
  });

  it("transfers 1:1 (no fees)", async () => {
    const [owner, alice] = await ethers.getSigners();
    const Celini = await ethers.getContractFactory("CeliniToken");
    const token = await Celini.deploy();
    await token.transfer(alice.address, ethers.parseUnits("100", 18));
    expect(await token.balanceOf(alice.address)).to.equal(ethers.parseUnits("100", 18));
  });
});
