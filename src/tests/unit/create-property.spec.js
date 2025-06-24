import { shallowMount } from '@vue/test-utils'
import CreateProperty from '@/core/domain/components/property-form/create-property.vue' // ajusta la ruta
import { PropertyApiService } from '@/core/public/services/property-api.service'

// Mock del servicio
jest.mock('@/core/public/services/property-api.service', () => {
    return {
        PropertyApiService: jest.fn().mockImplementation(() => ({
            postProperty: jest.fn()
        }))
    }
})

describe('CreateProperty.vue', () => {
    let wrapper;
    let mockRouterPush;
    let mockPostProperty;

    beforeEach(() => {
        mockRouterPush = jest.fn()

        wrapper = shallowMount(CreateProperty, {
            global: {
                mocks: {
                    $router: {
                        push: mockRouterPush
                    },
                    $t: (msg) => msg // mock de traducción
                }
            }
        });

        mockPostProperty = wrapper.vm.propertyApiService.postProperty;
    });

    it('should send correct data and navigate on successful create', async () => {
        // Preparamos datos
        wrapper.setData({
            id_propiedad: '123',
            titulo: 'Casa Bonita',
            imagen: 'http://imagen.jpg',
            descripcion: 'Una casa con jardín',
            precio_dolares: 120000,
            tipo_propiedad: 'Casa',
            operacion: 'Venta',
            entrega: 'Inmediata',
            area_techada_metros_cuadrados: 120,
            area_total_metros_cuadrados: 150,
            cantidad_dormitorios: 3,
            cantidad_banios: 2,
            cantidad_estacionamientos: 1,
            etapa_proyecto: 'Terminado',
            fecha_inicio_proyecto: '2024-01-01',
            antiguedad: 'Nueva',
            anunciantes_id_anunciante: '456',
            ubicaciones_id_ubicacion: '789',
            distrito: 'Miraflores'
        });

        mockPostProperty.mockResolvedValue({ status: 201 });

        // Mock de alert
        global.alert = jest.fn();

        await wrapper.vm.create();

        expect(mockPostProperty).toHaveBeenCalledWith(expect.objectContaining({
            id_propiedad: '123',
            titulo: 'Casa Bonita',
            descripcion: 'Una casa con jardín'
        }));

        expect(alert).toHaveBeenCalledWith('Property created');
        expect(mockRouterPush).toHaveBeenCalledWith('/home');
    });

    it('should show error alert when property creation fails', async () => {
        mockPostProperty.mockResolvedValue({ status: 500 });
        global.alert = jest.fn();

        await wrapper.vm.create();

        expect(alert).toHaveBeenCalledWith('Error creating Property');
        expect(mockRouterPush).not.toHaveBeenCalled();
    });
});
