/* eslint-env jest */
const { shallowMount } = require("@vue/test-utils");
const TheNewSearch = require("@/core/public/components/home/the-new-search.component.vue").default;

const mockPush = jest.fn();
jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: mockPush,
    }),
}));

const mockT = (key) => {
    const translations = {
        "searchInput.selectDefaultDistrict": "Seleccionar distrito",
        "searchInput.selectDefaultType": "Tipo de propiedad",
        "searchInput.selectType1": "Casa",
        "searchInput.selectType2": "Departamento",
        "searchInput.filterInputMin": "Precio mínimo",
        "searchInput.filterInputMax": "Precio máximo",
    };
    return translations[key] || key;
};

describe("TheNewSearch", () => {
    let wrapper;

    beforeEach(() => {
        mockPush.mockClear();

        wrapper = shallowMount(TheNewSearch, {
            global: {
                mocks: {
                    $t: mockT,
                },
                stubs: {
                    'router-link': true
                }
            },
        });
    });

    it("renderiza correctamente los elementos de búsqueda", () => {
        expect(wrapper.find('select[aria-label="Opciones de distritos"]').exists()).toBe(true);
        expect(wrapper.find('select[aria-label="Opciones de tipo de propiedad"]').exists()).toBe(true);
        expect(wrapper.find('input[aria-label="Precio mínimo de busqueda"]').exists()).toBe(true);
        expect(wrapper.find('input[aria-label="Precio máximo de busqueda"]').exists()).toBe(true);
    });

    it("actualiza correctamente los valores de los filtros", async () => {
        const districtSelect = wrapper.find('select[aria-label="Opciones de distritos"]');
        const typeSelect = wrapper.find('select[aria-label="Opciones de tipo de propiedad"]');
        const minInput = wrapper.find('input[aria-label="Precio mínimo de busqueda"]');
        const maxInput = wrapper.find('input[aria-label="Precio máximo de busqueda"]');

        await districtSelect.setValue("Miraflores");
        await typeSelect.setValue("Casa");
        await minInput.setValue("50000");
        await maxInput.setValue("100000");

        expect(wrapper.vm.propertyDistrict).toBe("Miraflores");
        expect(wrapper.vm.propertyType).toBe("Casa");
        expect(wrapper.vm.minvalue).toBe(50000);
        expect(wrapper.vm.maxvalue).toBe(100000);
    });

    it("navega correctamente cuando se llama navegateToSearch", () => {
        wrapper.vm.propertyDistrict = "San Isidro";
        wrapper.vm.propertyType = "Departamento";
        wrapper.vm.minvalue = 75000;
        wrapper.vm.maxvalue = 150000;


        wrapper.vm.navegateToSearch();


        expect(mockPush).toHaveBeenCalledWith({
            name: "SearchComponent",
            params: {
                propertyDistrict: "San Isidro",
                propertyType: "Departamento",
                minvalue: 75000,
                maxvalue: 150000,
            },
        });
    });
});