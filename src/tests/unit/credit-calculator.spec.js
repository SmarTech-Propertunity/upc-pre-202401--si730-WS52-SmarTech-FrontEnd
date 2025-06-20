/* eslint-env jest */
const { shallowMount } = require('@vue/test-utils');
const CreditCalculator = require('@/core/domain/components/finance-tool/credit-calculator.component.vue').default;


describe('CreditCalculator', () => {
    it('calcula correctamente la cuota mensual', () => {
        const wrapper = shallowMount(CreditCalculator)
        wrapper.setData({
            annualInterestRate: 12,
            term: 12,
            propertyPrice: 100000,
            initialFee: 10000,
            additionalCosts: 5000,
            amountToBeFinanced: 90000
        })
        wrapper.vm.calculateMonthlyPayment()
        expect(wrapper.vm.monthlyPayment).toBeDefined()
        expect(Number(wrapper.vm.monthlyPayment)).toBeGreaterThan(0)
    })
})