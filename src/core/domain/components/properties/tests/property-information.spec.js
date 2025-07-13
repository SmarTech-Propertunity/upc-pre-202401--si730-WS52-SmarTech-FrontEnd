import { shallowMount } from '@vue/test-utils';
import PropertyInformation from '@/core/domain/components/properties/components/property-information.component.vue';

// Mock getPropertyById para evitar error de import.meta.env
jest.mock('@/core/domain/components/properties/services/property.api.service.js', () => ({
  getPropertyById: jest.fn(() => Promise.resolve({}))
}));

describe('PropertyInformation Component', () => {
  it('muestra mensaje de carga si no hay propiedad', () => {
    const wrapper = shallowMount(PropertyInformation, {
      data() {
        return { property: null };
      },
      global: {
        mocks: {
          $route: { params: { id: 1 } }
        }
      }
    });
    expect(wrapper.text()).toContain('Cargando información de la propiedad...');
  });

  it('muestra información de la propiedad', () => {
    const property = {
      id: 1,
      title: 'Casa 1',
      description: 'Desc 1',
      location: 'Ubic 1',
      price: 1000,
      dimensions: '100m2',
      rooms: 3,
      features: ['Piscina', 'Jardín'],
      images: ['img1.jpg', 'img2.jpg'],
      metrics: { views: 10, clicks: 5, contactRequests: 2 },
      isActive: true
    };
    const wrapper = shallowMount(PropertyInformation, {
      data() {
        return { property };
      },
      global: {
        mocks: {
          $route: { params: { id: 1 } }
        }
      }
    });
    expect(wrapper.text()).toContain('Casa 1');
    expect(wrapper.text()).toContain('Desc 1');
    expect(wrapper.text()).toContain('Ubic 1');
    expect(wrapper.text()).toContain('100m2');
    expect(wrapper.text()).toContain('Piscina');
    expect(wrapper.text()).toContain('Jardín');
    expect(wrapper.text()).toContain('Vistas: 10');
    expect(wrapper.text()).toContain('Clicks: 5');
    expect(wrapper.text()).toContain('Solicitudes de contacto: 2');
    expect(wrapper.text()).toContain('Activa');
  });
});
