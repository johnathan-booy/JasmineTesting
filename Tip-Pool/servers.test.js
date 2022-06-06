describe("Servers", function () {
	beforeEach(function () {
		// initialization logic
		serverNameInput.value = "Alice";
		submitServerInfo();
		serverNameInput.value = "George";
		submitServerInfo();
		billAmtInput.value = 20;
		tipAmtInput.value = 2;
		submitPaymentInfo();
		billAmtInput.value = 20;
		tipAmtInput.value = 4;
		submitPaymentInfo();
	});

	describe("submitServerInfo", () => {
		it("should add a new server to allServers on submitServerInfo()", function () {
			expect(Object.keys(allServers).length).toEqual(2);
			expect(allServers["server" + serverId].serverName).toEqual("George");
		});
	});

	describe("updateServerTable", () => {
		it("should add new server to serverTBody", function () {
			expect(serverTbody.firstChild.children[0].innerText).toEqual("Alice");
		});

		it("should calculate and display the tip amount for each server", function () {
			expect(serverTbody.firstChild.children[1].innerText).toEqual("$3.00");
		});
	});

	afterEach(function () {
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
