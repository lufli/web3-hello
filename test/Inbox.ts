import { expect } from "chai";
import hre from "hardhat";

describe("Inbox", function () {
    let inbox;

    beforeEach(async function () {
        const Inbox = await hre.ethers.getContractFactory("Inbox");
        inbox = await Inbox.deploy("Hello There!");
    });

    it("deploy a contract", function () {
        expect(inbox.target).to.be.a("string");
    });

    it("has a default value", async function () {
        expect(await inbox.message()).to.equal("Hello There!");
    });

    it("can change message", async function () {
        await inbox.setMessage("Bye!");
        expect(await inbox.message()).to.equal("Bye!");
    });
});