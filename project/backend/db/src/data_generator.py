import random

profs = {'E_PG': 'Pedro Gonçalves', 'SiF': 'Sílvia de Francesco', 'AFR': 'António Manuel de Brito Ferrari Almeida', 'JLO': 'José Luis Guimarães Oliveira', 'MAGL': 'Miguel Angel Guevara Lopez', 'PF': 'Pedro Fonseca', 'A_CVT': 'Cláudio Jorge Vieira Teixeira', 'ORP': 'Osvaldo Manuel da Rocha Pacheco', 'HRG': 'Hélder José Rodrigues Gomes', 'JCP': 'José Carlos Esteves Duarte Pedro', 'AP': 'Armando José Formoso de Pinho', 'JAF': 'José Alberto Gouveia Fonseca', 'P_SAM': 'Sérgio Guilherme Aleixo de Matos', 'BSS': 'Maria Beatriz Alves de Sousa Santos', 'AM': 'Alexandre Manuel Moutela Nunes da Mota', 'JSP': 'Joaquim Manuel Henriques de Sousa Pinto', 'JFR': 'José Rodrigues Ferreira da Rocha', 'RLAA': 'Rui Luís Andrade Aguiar', 'JLA': 'José Luis Costa Pinto Azevedo', 'LFA': 'Luis Filipe Mesquita Nero Moreira Alves', 'AG': 'Atílio Manuel da Silva Gameiro', 'PMD': 'Paulo Miguel de Jesus Dias', 'JMR': 'João Manuel de Oliveira e Silva Rodrigues', 'PS': 'Paulo Jorge Salvador Serra Ferreira', 'AMT': 'Ana Maria Perfeito Tomé', 'JEO': 'João Pedro Estima de Oliveira', 'RR': 'Rui Fernando Gomes de Sousa Ribeiro', 'SKL': 'Valeri Skliarov', 'ARB': 'António Rui de Oliveira e Silva Borges', 'NBC': 'Nuno Miguel Gonçalves Borges de Carvalho', 'CC': 'Carlos Manuel Azevedo Costa', 'ANP': 'Armando Humberto Moreira Nolasco Pinto', 'AJT': 'António Joaquim da Silva Teixeira', 'AFS': 'Augusto Marques Ferreira da Silva', 'TRC': 'Telmo Reis Cunha', 'MBC': 'Manuel Bernardo Salvador Cunha', 'MOD': 'Aníbal Manuel de Oliveira Duarte', 'HTZ': 'Helder Troca Zagalo', 'JM': 'Joaquim João Estrela Ribeiro Silvestre Madeira', 'JMM': 'José Manuel Matos Moreira', 'PPM': 'Paulo Miguel Nepomuceno Pereira Monteiro', 'JNV': 'José Manuel Neto Vieira', 'ICO': 'Ilídio Castro Oliveira', 'PL': 'Pedro Miguel Ribeiro Lavrador', 'ACP': 'Artur José Carneiro Pereira', 'AO': 'Arnaldo Silva Rodrigues de Oliveira', 'ASP': 'António Manuel Melo de Sousa Pereira', 'EVM': 'Ernesto Fernando Ventura Martins', 'JAM': 'Joaquim Arnaldo Carvalho Martins', 'JNL': 'José Nuno Panelas Nunes Lau', 'PP': 'Paulo Bacelar Reis Pedreiras', 'REM': 'Rui Manuel Escadas Ramos Martins', 'LSL': 'Luís Filipe de Seabra Lopes', 'SS': 'Susana Isabel Barreto de Miranda Sargento', 'ANC': 'António Manuel Nunes da Cruz', 'APS': 'Adão Paulo Soares da Silva', 'MOS': 'Miguel Augusto Mendes Oliveira e Silva', 'ARN': 'António José Ribeiro Neves', 'AVZ': 'André Ventura da Cruz Marnoto Zúquete', 'AN': 'António Manuel Duarte Nogueira', 'OMP': 'Oscar Pereira', 'IOU': 'Iouliia Skliarova', 'AGC': 'António Guilherme Rocha Campos', 'MAV': 'Manuel Alberto Reis de Oliveira Violas', 'ML': 'Mário José Neves de Lima', 'AS': 'Amaro Fernandes de Sousa', 'TOS': 'Tomás António Mendes Oliveira e Silva', 'ADR': 'Armando Carlos Domingues da Rocha', 'ANR': 'António José Nunes Navarro Rodrigues', 'CCB': 'Carlos Alberto da Costa Bastos', 'JNM': 'João Nuno Pimentel da Silva Matos', 'JPB': 'João Paulo Silva Barraca', 'PG': 'Pétia Georgieva Georgieva', 'SM': 'Susana de Jesus Mota', 'JMF': 'José Maria Amaral Fernandes', 'PC': 'Pedro Miguel da Silva Cabral', 'FMS': 'Filipe Miguel Teixeira Pereira da Silva', 'JLC': 'José Luis Vieira Cura', 'AAR': 'António Manuel Adrego da Rocha', 'DG': 'Diogo Nuno Pereira Gomes'}
ucs = {'AA': 'ALGORITMOS AVANÇADOS', 'AED': 'ALGORITMOS E ESTRUTURAS DE DADOS', 'AMS': 'ANÁLISE E MODELAÇÃO DE SISTEMAS', 'ACE': 'APLICACIONAIS PARA CIENCIAS E ENGENHARIA', 'ACA': 'ARQUITECTURA DE COMPUTADORES AVANÇADA', 'ARA': 'ARQUITECTURA DE REDES AVANÇADAS', 'AC1': 'ARQUITETURA DE COMPUTADORES I', 'CBD': 'COMPLEMENTOS DE BASES DE DADOS', 'CV': 'COMPUTAÇÃO VISUAL', 'E': 'ELECTRÓNICA', 'EP': 'ELECTRÓNICA DE POTÊNCIA', 'E1': 'ELECTRÓNICA I', 'E3': 'ELECTRÓNICA III', 'ET': 'ELECTROTECNIA TEÓRICA', 'EDC': 'ENGENHARIA DE DADOS E CONHECIMENTO', 'ED': 'EXPLORAÇÃO DE DADOS', 'FP': 'FUNDAMENTOS DE PROGRAMAÇÃO', 'FR': 'FUNDAMENTOS DE REDES', 'IA': 'INTELIGÊNCIA ARTIFICIAL', 'IES': 'INTRODUÇÃO À ENGENHARIA DE SOFTWARE', 'IIA': 'INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL', 'ISDig': 'INTRODUÇÃO AOS SISTEMAS DIGITAIS', 'ITIC': 'INTRODUÇÃO ÀS TECNOLOGIAS DE INFORMAÇÃO E DA COMUNICAÇÃO', 'ITW': 'INTRODUÇÃO ÀS TECNOLOGIAS WEB', 'LB1': 'LABORATÓRIOS BIOMOLECULARES I', 'LabE': 'LABORATÓRIOS DE ELECTRÓNICA (ANUAL)', 'LabI': 'LABORATÓRIOS DE INFORMÁTICA', 'MPE': 'MÉTODOS PROBABÍLISTICOS EM ELECTROTECNIA', 'MPEI': 'MÉTODOS PROBABÍLISTICOS PARA ENGENHARIA INFORMÁTICA', 'PDS': 'PROCESSAMENTO DIGITAL DE SINAL', 'P1': 'PROGRAMAÇÃO I', 'P3': 'PROGRAMAÇÃO III', 'RI': 'RECUPERAÇÃO DE INFORMAÇÃO', 'RSvc': 'REDES E SERVIÇOS', 'S': 'SEGURANÇA', 'SIO': 'SEGURANÇA INFORMÁTICA E NAS ORGANIZAÇÕES', 'SMEI': 'SEMINARIO (MEI)', 'SAI': 'SEMINARIO (AI)', 'SC2': 'SISTEMAS DE COMUNICAÇÃO II', 'SO': 'SISTEMAS DE OPERAÇÃO', 'SC1': 'SISTEMAS E CONTROLO I', 'SSI': 'SISTEMAS E SINAIS EM IMAGIOLOGIA', 'SM': 'SISTEMAS MULTIMÉDIA', 'SOps': 'SISTEMAS OPERATIVOS', 'TIS': 'TECNOLOGIAS DE INFORMAÇÃO EM SAÚDE', 'TQ': 'TECNOLOGIAS QUÂNTICAS', 'TAI': 'TEORIA ALGORITMICA DA INFORMAÇÃO', 'TB': 'TÓPICOS EM BIOINFORMÁTICA', 'VI': 'VISUALIZAÇÃO DE INFORMAÇÃO', 'O_CAV': 'Codificação de Áudio e Vídeo', 'O_CSLP': 'Complementos Sobre Linguagens de Programação', 'O_CM': 'Computação Móvel', 'O_CO': 'Comunicações Ópticas', 'O_CSF': 'Comunicações sem Fios', 'O_CDig': 'Controlo Digital', 'O_DAA': 'Desenvolvimento e Análise de Algoritmos', 'O_EBP': 'Electrónica de Baixa Potência', 'O_ES': 'Engenharia de Serviços', 'O_IRFID': 'RFID', 'O_IS': 'Identificação de Sistemas', 'O_IM': 'Interação Multimodal', 'O_ICM': 'INTRODUÇÃO À COMPUTAÇÃO MÓVEL', 'O_M': 'MicroElectrónica', 'O_PCOO': 'Programação Concorrente Orientada por Objectos', 'O_PP': 'Programação Paralela', 'O_PSE': 'Programação de Sistemas Embutidos', 'O_RVA': 'Realidade Virtual e Aumentada', 'O_RI': 'Recuperação de Informação', 'O_RA': 'Redes de Acesso', 'O_RSI': 'Redes e Serviços em Imagiologia', 'O_RM': 'Redes Móveis', 'O_RO': 'Redes Ópticas', 'O_RSF': 'Redes sem-Fios', 'O_RMI': 'Robótica Móvel e Inteligente', 'O_TPW': 'Tecnologias e Programação Web', 'O_SR': 'Sistemas de Rádio', 'O_ERF': 'Electrónica de Rádio Frequência', 'O_STR': 'Sistemas de Tempo Real', 'O_VC': 'Visão por Computador'}
phone_prefixes = ["+35191", "+35192", "+35193", "+35196"]

phones = set()

def get_email(sigla):
    return f"{sigla.lower()}@ua.pt"

def get_phone():
    return str(random.choice(phone_prefixes)+str(random.randint(1000000, 9999999)))

def get_prof_rank():
    rng = random.random()
    if rng > 0.80:
        return "Catedrático"
    elif rng > 0.40:
        return "Associado"
    elif rng > 0.10:
        return "Auxiliar"
    else:
        return "Convidado"


def get_prof_situation():
    rng = random.random()
    if rng > 0.95:
        return "Sabática"
    elif rng > 0.9:
        return "Reformado"
    else:
        return "Ativo"

def get_students():
    rng = random.random()
    if rng > 0.95:
        return 45
    elif rng > 0.9:
        return 62
    else:
        return 80

### departments ###
print(f"-- departments\n\
INSERT INTO dsd.departments(dept_id, acronym, dept_name, dept_address, phone) VALUES(4, 'DETI', 'Departamento de Eletrónica, Telecomunicações e Informática', 'Campus Universitário de Santiago\
3810-193 Aveiro, Portugal', '+351234370355');\
INSERT INTO dsd.departments(dept_id, acronym, dept_name, dept_address, phone) VALUES(11, 'DMAT', 'Departamento de Matemática', 'Campus Universitário de Santiago, 3810-193 Aveiro, Portugal', '+351234372545');\
INSERT INTO dsd.departments(dept_id, acronym, dept_name, dept_address, phone) VALUES(23, 'CP', 'Complexo Pedagógico', 'Campus Universitário de Santiago, 3810-193 Aveiro, Portugal', '+351234370200');\
\n\n")

### profs ###
print("-- profs\n\n")
for i in profs:
    print(f"INSERT INTO dsd.professors(nmec, email, phone, acronym, prof_name, prof_rank, situation, department_num) \
        VALUES({random.randint(40000,90000)}, '{get_email(i)}', '{get_phone()}', '{i}', '{profs[i]}', '{get_prof_rank()}', '{get_prof_situation()}', 4);")

### dsders ###
print("\n\n\
-- dsders\n\n\
INSERT INTO dsd.dsders(dsder_id) VALUES(1);\
")

### courses ###

print(f"\n\n\
-- courses\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(8240, 'MIECT', 'Mestrado Integrado em Engenharia de Computadores e Telemática', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(8295, 'LEI', 'Licenciatura em Engenharia Informática', 04, 1);\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(8309, 'MIEET', 'Mestrado Integrado em Engenharia Eletrónica e Telecomunicações', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(8316, 'LECI', 'Licenciatura em Engenharia de Computadores e Informática', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(8321, 'LEEC', 'Licenciatura em Engenharia Eletrotécnica e Computadores', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(8327, 'LEA', 'Licenciatura em Engenharia Aeroespacial', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(9263, 'MEI', 'Mestrado em Engenharia Informática', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(9281, 'MC', 'Mestrado em Cibersegurança', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(9283, 'MRSI', 'Mestrado em Robótica e Sistemas Inteligentes', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(9291, 'MECT', 'Mestrado em Engenharia de Computadores e Telemática', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(9294, 'MEC', 'Mestrado em Engenharia Computacional', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(9295, 'MEEC', 'Mestrado em Engenharia Eletrotécnica e Comunicações', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(9306, 'MCD', 'Mestrado em Ciência de Dados', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(9924, 'PDI', 'Programa Doutoral em Informática', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(9934, 'PDEI', 'Programa Doutoral em Engenharia Informática', 04, {random.randint(1,len(profs))});\n\
INSERT INTO dsd.courses(course_id, acronym, course_name, department, director) VALUES(9935, 'PDEE', 'Programa Doutoral em Engenharia Eletrotécnica', 04, {random.randint(1,len(profs))});\n\
")

### ucs ###
print("\n\n-- ucs\n\n")

for counter,i in enumerate(ucs):
    print(f"INSERT INTO dsd.ucs(uc_id, acronym, uc_name, students_estimate, director) \
         VALUES ({80000+counter+1}, '{i}', '{ucs[i]}', {get_students()}, {random.randint(1,len(profs))} );")


### classes ###
print("\n\n-- classes\n\n")

counter = 0
for u in range(len(ucs)):
    counter+=1
    for i in range(random.randrange(3,8)):
        rng = random.random()
        if rng > 0.50: #    prof_id INT availability_percent INT
            print(f"INSERT INTO dsd.classes(prof_id, availability_percent,year_int, uc_num, component, class_hours) VALUES({random.randint(1,len(profs))},{random.choice([25,50,100,100,100,100,100])},{random.randint(2016,2022)}, {80000+counter}, '{random.choice(['P','P','P','T'])}', 2);")
        else:
            print(f"INSERT INTO dsd.classes(availability_percent, year_int, uc_num, component, class_hours) VALUES({random.choice([25,50,100,100,100,100,100])},{random.randint(2016,2022)}, {80000+counter}, '{random.choice(['P','P','P','T'])}', 2);")


### wishlists ###
print("\n\n-- wishlists\n\n")

for i in range(len(profs)):
    for x in range(len(ucs)):
        print(f"INSERT INTO dsd.wishlists(year_int, professor, preference, uc_id) VALUES(2022, {i+1}, '{random.choice(['likes','neutral','dislikes'])}', {80001+x});")