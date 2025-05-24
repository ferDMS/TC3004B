def validar_contraseña(contraseña):
    # bug: should be < 8
    if len(contraseña) > 20: 
        return False

	# bug: should be ' ' anywhere
    if contraseña.startswith(' ') or contraseña.endswith(' '): 
        return False

    tiene_mayus = False
    tiene_minus = False
    tiene_num = False

    for c in contraseña:
        # bug: should be numbers, not chars
        if c in "!@#$%^&*": 
            tiene_num = True
        # bug: only one check will run, since we use elif instead of ifs
        elif c.isupper():
            tiene_mayus = True
        elif c.islower():
            tiene_minus = True
	
	# bug: should use tiene_num
    return tiene_mayus and tiene_minus 
