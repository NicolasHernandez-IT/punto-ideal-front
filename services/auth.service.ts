const API_URL = 'http://localhost:3001';

export interface RegisterDto {
    nombre: string;
    mail: string;
    telefono: string;
    contrasenia: string;
}

export interface LoginDto {
    mail: string;
    contrasenia: string;
}

export interface AuthResponse {
    access_token: string;
    user: {
        id: number;
        nombre: string;
        mail: string;
        rol: string;
    };
}

export const authService = {
    async register(data: RegisterDto): Promise<void> {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            if (response.status === 409) {
                throw new Error('El correo o teléfono ya están registrados.');
            }
            throw new Error('Error en el registro. Intente nuevamente.');
        }
    },

    async login(data: LoginDto): Promise<AuthResponse> {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            if (response.status === 401 || response.status === 404) {
                throw new Error('Credenciales inválidas.');
            }
            throw new Error('Error al iniciar sesión.');
        }

        const result = await response.json();

        // Save token to localStorage for persistence
        if (typeof window !== 'undefined') {
            localStorage.setItem('token', result.access_token);
            localStorage.setItem('user', JSON.stringify(result.user));
        }

        return result;
    },

    logout() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    },

    getToken(): string | null {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        }
        return null;
    }
};
