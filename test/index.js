const tester = require("tester")
    , ms = require("../lib")
    ;

tester.describe("checking the values", test => {
    test.it("check ms", () => {
        test.expect(ms.ms).toBe(1);
    });
    test.it("check second", () => {
        test.expect(ms.second).toBe(1 * 1000);
    });
    test.it("check minute", () => {
        test.expect(ms.minute).toBe(1 * 1000 * 60);
    });
    test.it("check hour", () => {
        test.expect(ms.hour).toBe(1 * 1000 * 60 * 60);
    });
    test.it("check day", () => {
        test.expect(ms.day).toBe(1 * 1000 * 60 * 60 * 24);
    });
    test.it("check week", () => {
        test.expect(ms.week).toBe(1 * 1000 * 60 * 60 * 24 * 7);
    });
});
