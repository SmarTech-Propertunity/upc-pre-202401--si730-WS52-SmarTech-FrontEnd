import { shallowMount } from '@vue/test-utils';
import ListProperty from '@/core/domain/components/properties/components/list-property.component.vue';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock getAllProperties para evitar error de import.meta.env
vi.mock('@/core/domain/components/properties/services/property.api.service.js', () => ({
  getAllProperties: vi.fn(() => Promise.resolve([]))
}));

describe('ListProperty Component', () => {
  it('muestra el título de la lista', () => {
    const wrapper = shallowMount(ListProperty, {
      data() {
        return { properties: [] };
      }
    });
    expect(wrapper.text()).toContain('Propiedades disponibles');
  });

  it('muestra mensaje si no hay propiedades', () => {
    const wrapper = shallowMount(ListProperty, {
      data() {
        return { properties: [] };
      }
    });
    expect(wrapper.text()).toContain('No hay propiedades disponibles.');
  });

  it('muestra cards de propiedades cuando existen', () => {
    const properties = [
      { id: 1, title: 'Casa 1', description: 'Desc 1', location: 'Ubic 1', price: 1000, images: ['img1.jpg'] },
      { id: 2, title: 'Casa 2', description: 'Desc 2', location: 'Ubic 2', price: 2000, images: ['img2.jpg'] }
    ];
    const wrapper = shallowMount(ListProperty, {
      data() {
        return { properties };
      }
    });
    expect(wrapper.findAll('.property-card').length).toBe(2);
    expect(wrapper.text()).toContain('Casa 1');
    expect(wrapper.text()).toContain('Casa 2');
  });
});
