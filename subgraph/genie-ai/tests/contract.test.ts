import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { NewGenie } from "../generated/schema"
import { NewGenie as NewGenieEvent } from "../generated/Contract/Contract"
import { handleNewGenie } from "../src/contract"
import { createNewGenieEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let genieId = BigInt.fromI32(234)
    let genieAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let ownerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let ownerTalentLayerId = BigInt.fromI32(234)
    let price = BigInt.fromI32(234)
    let schemaCid = "Example string value"
    let serviceCid = "Example string value"
    let proposalCid = "Example string value"
    let newNewGenieEvent = createNewGenieEvent(
      genieId,
      genieAddress,
      ownerAddress,
      ownerTalentLayerId,
      price,
      schemaCid,
      serviceCid,
      proposalCid
    )
    handleNewGenie(newNewGenieEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewGenie created and stored", () => {
    assert.entityCount("NewGenie", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewGenie",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "genieId",
      "234"
    )
    assert.fieldEquals(
      "NewGenie",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "genieAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NewGenie",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ownerAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NewGenie",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ownerTalentLayerId",
      "234"
    )
    assert.fieldEquals(
      "NewGenie",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "NewGenie",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "schemaCid",
      "Example string value"
    )
    assert.fieldEquals(
      "NewGenie",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "serviceCid",
      "Example string value"
    )
    assert.fieldEquals(
      "NewGenie",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposalCid",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
