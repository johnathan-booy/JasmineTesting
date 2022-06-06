describe("Payments", () => {
	beforeEach(() => {
		billAmtInput.value = 20;
		tipAmtInput.value = 2;
	});

	describe("submitPaymentInfo", () => {
		it("should add an object to allPayments", () => {
			submitPaymentInfo();
			expect(Object.keys(allPayments).length).toEqual(1);
			expect(allPayments.payment1.billAmt).toEqual("20");
			expect(allPayments.payment1.tipAmt).toEqual("2");
		});
	});

	describe("createCurPayment", () => {
		it("object should include billAmt", () => {
			expect(createCurPayment().billAmt).toEqual("20");
		});
		it("object should include tipAmt", () => {
			expect(createCurPayment().tipAmt).toEqual("2");
		});
		it("object should include billAmt", () => {
			expect(createCurPayment().tipPercent).toEqual(10);
		});
	});

	describe("appendPaymentTable", () => {
		it("should accurately display curPayment", () => {
			submitPaymentInfo();
			expect(paymentTbody.firstChild.children[0].innerText).toEqual("$20");
			expect(paymentTbody.firstChild.children[1].innerText).toEqual("$2");
			expect(paymentTbody.firstChild.children[2].innerText).toEqual("10%");
		});
	});

	afterEach(() => {
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
