// src/tests/unit/register-user.spec.js

import { shallowMount } from '@vue/test-utils';
// --- IMPORTANT: Directly import the Vue component ---
// This path needs to be correct for your project structure.
// Assuming it's at 'src/core/domain/components/user-management/register-user.component.vue'
import RegisterComponent from '@/core/domain/components/user-management/register-user.component.vue';

// Mock localStorage at the global level for all tests in this file
// It's crucial that this mock happens BEFORE any `beforeEach` or `it` blocks
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: jest.fn((key) => store[key] || null),
        setItem: jest.fn((key, value) => {
            store[key] = value.toString();
        }),
        removeItem: jest.fn((key) => {
            delete store[key];
        }),
        clear: jest.fn(() => {
            store = {};
        })
    };
})();

// Replace the global localStorage with our mock
Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true, // Allow it to be reassigned if needed, though generally not for this setup
});


describe('RegisterComponent.vue', () => {
    let wrapper;
    let mockPush;

    const createComponent = () => {
        mockPush = jest.fn();

        return shallowMount(RegisterComponent, { // Mount the imported component directly
            global: {
                mocks: {
                    $router: { push: mockPush },
                    $t: (msg) => msg // mock de traducciones
                }
            }
        });
    };

    beforeEach(() => {
        // Create a new component instance for each test
        wrapper = createComponent();

        // Clear all mocks on our localStorageMock and other spies/mocks
        // This resets call counts and any mocked implementations from previous tests
        localStorageMock.clear(); // Clear the internal store
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
        localStorageMock.removeItem.mockClear();
        jest.clearAllMocks(); // Clears any other jest.fn() mocks like mockPush
    });

    // We don't need afterEach for mockRestore because localStorage is globally mocked
    // and its methods are jest.fn() which are cleared in beforeEach.

    it('should validate empty username', () => {
        wrapper.setData({ username: '' });
        wrapper.vm.validateUsername();
        expect(wrapper.vm.usernameError).toBe('usernameRequired');
    });

    it('should validate short username', () => {
        wrapper.setData({ username: 'ab' });
        wrapper.vm.validateUsername();
        expect(wrapper.vm.usernameError).toBe('usernameTooShort');
    });

    it('should validate empty password', () => {
        wrapper.setData({ password: '' });
        wrapper.vm.validatePassword();
        expect(wrapper.vm.passwordError).toBe('passwordRequired');
    });

    it('should validate short password', () => {
        wrapper.setData({ password: '12345' });
        wrapper.vm.validatePassword();
        expect(wrapper.vm.passwordError).toBe('passwordTooShort');
    });

    it('should validate invalid email format', () => {
        wrapper.setData({ email: 'correo@mal' });
        wrapper.vm.validateEmail();
        expect(wrapper.vm.emailError).toBe('emailInvalid');
    });

    it('should validate empty phone number', () => {
        wrapper.setData({ phonenumber: '' });
        wrapper.vm.validatePhoneNumber();
        expect(wrapper.vm.phoneError).toBe('phoneRequired');
    });

    it('should validate invalid phone number format', () => {
        wrapper.setData({ phonenumber: '12345abc' });
        wrapper.vm.validatePhoneNumber();
        expect(wrapper.vm.phoneError).toBe('phoneInvalid');
    });

    it('should register user successfully if all fields are valid', async () => {
        wrapper.setData({
            username: 'lucio',
            password: '123456',
            email: 'lucio@mail.com',
            phonenumber: '987654321'
        });

        await wrapper.vm.register();

        expect(wrapper.vm.usernameError).toBeNull();
        expect(wrapper.vm.passwordError).toBeNull();
        expect(wrapper.vm.emailError).toBeNull();
        expect(wrapper.vm.phoneError).toBeNull();

        // Assert on the mock methods of localStorageMock
        expect(localStorageMock.setItem).toHaveBeenCalledWith('user', JSON.stringify({
            username: 'lucio',
            password: '123456',
            email: 'lucio@mail.com',
            phonenumber: '987654321'
        }));

        expect(mockPush).toHaveBeenCalledWith('/');
    });
});