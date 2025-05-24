import pytest

def validar_contraseña(contraseña):
	if len(contraseña) < 8:
		return False
	if ' ' in contraseña:
		return False
	tiene_mayus = any(c.isupper() for c in contraseña)
	tiene_minus = any(c.islower() for c in contraseña)
	tiene_num = any(c.isdigit() for c in contraseña)
	return tiene_mayus and tiene_minus and tiene_num

class TestValidarContraseña:
    # ID 1: Contraseña muy corta
    def test_contraseña_muy_corta(self):
        password = 'abc'
        assert validar_contraseña(password) == False

    # ID 2: Contraseña con espacio
    def test_contraseña_con_espacio(self):
        password = 'Valida Con Espacio'
        assert validar_contraseña(password) == False
        
    # ID 3: Contraseña válida
    def test_contraseña_valida(self):
        password = 'Valida123'
        assert validar_contraseña(password) == True
    
    # ID 4: Contraseña sin mayúscula
    def test_contraseña_sin_mayus(self):
        password = 'valida123'
        assert validar_contraseña(password) == False

    # ID 5: Contraseña sin minúscula
    def test_contraseña_sin_minus(self):
        password = 'VALIDA123'
        assert validar_contraseña(password) == False
    
    # ID 6: Contraseña sin número
    def test_contraseña_sin_num(self):
        password = 'ValidaAbc'
        assert validar_contraseña(password) == False