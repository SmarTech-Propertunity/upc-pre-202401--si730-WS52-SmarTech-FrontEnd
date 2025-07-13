import { shallowMount } from '@vue/test-utils';
import PropertyInformation from '@/core/domain/components/properties/components/property-information.component.vue';
import { describe, it, expect, vi } from 'vitest';

// Mock servicios para evitar llamadas reales
vi.mock('@/core/domain/components/properties/services/property.api.service.js', () => ({
  getPropertyById: vi.fn(() => Promise.resolve({
    id: 1,
    title: 'Casa Test',
    location: 'Ubic Test',
    agentId: 2,
    features: [],
    images: [],
    metrics: { views: 1, clicks: 1, contactRequests: 1 },
    isActive: true
  }))
}));
vi.mock('@/core/domain/components/profiles/services/agent.api.service.js', () => ({
  getAgentById: vi.fn(() => Promise.resolve({ userId: 3 }))
}));
vi.mock('@/core/domain/components/user-management/services/user.api.service.js', () => ({
  getUserById: vi.fn(() => Promise.resolve({ name: 'Agente Test' }))
}));
vi.mock('@/core/domain/components/appointment/services/appointment.api.service.js', () => ({
  createAppointment: vi.fn(() => Promise.resolve({ id: 99 }))
}));

describe('PropertyInformation Dialog', () => {
  it('muestra el nombre del agente y adquirente en el dialog', async () => {
    const wrapper = shallowMount(PropertyInformation, {
      global: {
        mocks: {
          $route: { params: { id: 1 } }
        }
      }
    });
    // Simula abrir el dialog
    await wrapper.setData({ showDialog: true, loggedUserName: 'Usuario Test', property: { agentName: 'Agente Test', title: 'Casa Test', location: 'Ubic Test', images: [], features: [], metrics: {}, isActive: true } });
    // El nombre del agente se muestra en el value del input
    const agentInput = wrapper.find('input[type="text"]');
    expect(agentInput.element.value).toBe('Agente Test');
    // El nombre del adquirente se muestra en el segundo input
    const acquirerInput = wrapper.findAll('input[type="text"]')[1];
    expect(acquirerInput.element.value).toBe('Usuario Test');
    // El nombre de la propiedad y lugar
    const propertyInput = wrapper.findAll('input[type="text"]')[2];
    expect(propertyInput.element.value).toBe('Casa Test');
    const placeInput = wrapper.findAll('input[type="text"]')[3];
    expect(placeInput.element.value).toBe('Ubic Test');
  });

  it('no agenda cita si la hora está fuera de rango', async () => {
    const wrapper = shallowMount(PropertyInformation, {
      global: {
        mocks: {
          $route: { params: { id: 1 } }
        }
      }
    });
    await wrapper.setData({ showDialog: true, property: { images: [], features: [], metrics: {}, isActive: true }, appointment: { date: '2025-07-13T07:00', agentId: 2, acquireId: 3, propertyId: 1, place: 'Ubic Test' } });
    await wrapper.vm.submitAppointment();
    expect(wrapper.vm.appointmentError).toBe(true);
    expect(wrapper.vm.appointmentSuccess).toBe(false);
  });

  it('agenda cita correctamente si la hora está en rango', async () => {
    const wrapper = shallowMount(PropertyInformation, {
      global: {
        mocks: {
          $route: { params: { id: 1 } }
        }
      }
    });
    await wrapper.setData({ showDialog: true, property: { images: [], features: [], metrics: {}, isActive: true }, appointment: { date: '2025-07-13T10:00', agentId: 2, acquireId: 3, propertyId: 1, place: 'Ubic Test' } });
    await wrapper.vm.submitAppointment();
    expect(wrapper.vm.appointmentSuccess).toBe(true);
    expect(wrapper.vm.appointmentError).toBe(false);
  });
});
