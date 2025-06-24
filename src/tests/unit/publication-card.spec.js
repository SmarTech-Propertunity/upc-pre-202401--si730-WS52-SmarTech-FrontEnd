/* eslint-env jest */
const { shallowMount } = require("@vue/test-utils");
const PublicationCard = require("@/core/public/components/home/publication-card.component.vue").default;

const mockT = (key) => {
    const translations = {
        "publicationCard.offeredBy": "Ofrecido por ",
        "publicationCard.cost": "Desde ",
        "publicationCard.location": "En ",
    };
    return translations[key] || key;
};

const CardStub = {
    name: 'CardStub',
    template: `
        <div>
            <slot name="header"></slot>
            <slot name="title"></slot>
            <slot name="subtitle"></slot>
            <slot name="content"></slot>
            <slot name="footer"></slot>
        </div>
    `
};

describe("PublicationCard", () => {
    const defaultProps = {
        publicationImagePath: "/test-image.jpg",
        cardSize: 400,
        price: 75000,
        location: "Miraflores",
        offeredBy: "Inmobiliaria Test",
    };

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PublicationCard, {
            props: defaultProps,
            global: {
                mocks: {
                    $t: mockT,
                },
                stubs: {
                    'pv-card': CardStub,
                },
            },
        });
    });

    it("renderiza correctamente las props proporcionadas", () => {
        expect(wrapper.find(".publication-image").attributes("src")).toBe("/test-image.jpg");
        expect(wrapper.find(".publication-image").attributes("width")).toBe("400");
        expect(wrapper.text()).toContain("Inmobiliaria Test");
        expect(wrapper.text()).toContain("75000");
        expect(wrapper.text()).toContain("Miraflores");
    });

    it("muestra el precio con el formato correcto", () => {
        const priceElement = wrapper.find(".card-description");
        expect(priceElement.text()).toContain("S/.75000");
    });
});