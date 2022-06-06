describe("Helpers", () => {
  beforeAll(function () {
    // initialization logic

    // Create two servers
    serverNameInput.value = "Alice";
    submitServerInfo();
    serverNameInput.value = "George";
    submitServerInfo();

    // Create two bills
    billAmtInput.value = 20;
    tipAmtInput.value = 2;
    submitPaymentInfo();
    billAmtInput.value = 20;
    tipAmtInput.value = 4;
    submitPaymentInfo();
  });

  describe("sumPaymentTotal", () => {
    it("should calculate sum of billAmt", () => {
      expect(sumPaymentTotal("billAmt")).toEqual(40);
    });
    it("should calculate sum of tipAmt", () => {
      expect(sumPaymentTotal("tipAmt")).toEqual(6);
    });
    it("should calculate sum of tipPercent", () => {
      expect(sumPaymentTotal("tipPercent")).toEqual(30);
    });
  });

  describe("calculateTipPercent", () => {
    it("should calculate percent correctly", () => {
      expect(calculateTipPercent(20, 10)).toEqual(50);
    });
  });

  describe("appendTd", () => {
    it("should add a td with the correct data", () => {
      let newTr = document.createElement("tr");
      appendTd(newTr, "$0.00");
      expect(newTr.firstChild.innerText).toEqual("$0.00");
    });
  });

  afterAll(() => {
    // Server teardown logic
    allServers = {};
    serverId = 0;
    updateServerTable();

    // Payment teardown logic
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
    billAmtInput.value = "";
    tipAmtInput.value = "";

    // Summary teardown logic
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});
