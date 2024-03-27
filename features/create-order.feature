Feature: Order Creation Process

  Scenario: Create order with complex, nested items using YAML
    Given I have a complex order defined in YAML as:
      """
      type: ready
      customer:
        name: John Doe
        address: 123 Elm St
      items:
        - description: red shoes
          quantity: 1
          details:
            size: 42
            color: red
        - description: blue socks
          quantity: 2
          details:
            size: M
            color: blue
      """
    When I process the order
    Then the result should be "shipmentCreated"
