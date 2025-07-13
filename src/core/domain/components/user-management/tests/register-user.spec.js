import { shallowMount } from '@vue/test-utils';
import RegisterUserComponent from '@/core/domain/components/user-management/register-user.component.vue';

describe('RegisterUserComponent', () => {
  it('muestra el título de registro', () => {
    const wrapper = shallowMount(RegisterUserComponent, {
      global: {
        mocks: {
          $t: () => 'Registro'
        }
      }
    });
    expect(wrapper.text()).toMatch(/Registro|Regístrate|Crear cuenta/i);
  });

  it('tiene botón para registrar', () => {
    const wrapper = shallowMount(RegisterUserComponent, {
      global: {
        mocks: {
          $t: () => 'Registro'
        }
      }
    });
    expect(wrapper.find('button').exists()).toBe(true);
  });
});
