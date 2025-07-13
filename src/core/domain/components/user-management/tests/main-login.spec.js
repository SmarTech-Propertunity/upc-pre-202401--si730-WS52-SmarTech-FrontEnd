import { shallowMount } from '@vue/test-utils';
import MainLoginComponent from '@/core/domain/components/user-management/main-login.component.vue';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock loginUser para evitar error de import.meta.env
vi.mock('@/core/domain/components/user-management/services/user.api.service.js', () => ({
  loginUser: vi.fn(() => Promise.resolve({}))
}));

describe('MainLoginComponent', () => {
  it('muestra el título de login', () => {
    const wrapper = shallowMount(MainLoginComponent, {
      global: {
        mocks: {
          $t: () => 'Iniciar sesión'
        },
        stubs: {
          'pv-button': true,
          'router-link': true
        }
      }
    });
    expect(wrapper.text()).toMatch(/Iniciar sesión|Login/i);
  });

  it('tiene botón para iniciar sesión', () => {
    const wrapper = shallowMount(MainLoginComponent, {
      global: {
        mocks: {
          $t: () => 'Iniciar sesión'
        },
        stubs: {
          'pv-button': true,
          'router-link': true
        }
      }
    });
    // Busca el botón PrimeVue por clase
    expect(wrapper.find('.login-btn').exists()).toBe(true);
  });
});
