from main import calcular_raices
import unittest

class TestCalcularRaices(unittest.TestCase):
    
    # Two different real roots
    def test_two_roots(self):
        a, b, c = 1, -3, 2
        expected = (2.0, 1.0)
        self.assertEqual(calcular_raices(a, b, c), expected)
        
    # A = 0
    def test_non_quadratic(self):
        a, b, c = 0, 2, 1
        with self.assertRaises(ValueError):
            calcular_raices(a, b, c)
    
    # Imaginary root
    def test_complex_root(self):
        a, b, c = 1, 2, 5
        expected = (-1.0, 2.0, -2.0)
        self.assertEqual(calcular_raices(a, b, c), expected)

if __name__ == '__main__':
    unittest.main()