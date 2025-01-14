import { Given, When, Then } from "@cucumber/cucumber";
import * as assert from "assert";
import yaml from "js-yaml";

(() => {
  let order: any = {};
  let outcome: string = "";

  Given("I have a complex order defined in YAML as:", (orderYaml: string) => {
    order = yaml.load(orderYaml);
  });

  When("I process the order", async () => {
    // Simulate processing the order

    outcome = order.type === "ready" ? "shipmentCreated" : "error";
  });

  Then("the result should be {string}", (expectedOutcome: string) => {
    assert.strictEqual(
      outcome,
      expectedOutcome,
      `Expected outcome to be ${expectedOutcome}, but got ${outcome}`
    );
  });
})();
