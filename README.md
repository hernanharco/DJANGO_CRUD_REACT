Pasos a tener encuenta cuando se inicia en un nuevo portatil

Ver la version de Python 

	-> python --version
 
para trabajar con django pide que sea un version minimo 3.8

- se mira la version de node
  
	-> node --version

	lo mejor que sea un version por encima de la 16

	si no se tiene instalado seguir esta guia

	https://kinsta.com/es/blog/como-instalar-node-js/

para equipos nuevos y crear un entorno virtual de python

pip install virtualenv

una vez instalado vamos a dar - el segundo venv es el nombre de la carpeta donde se va a guardar los comandos

	-> python -m venv venv
 
	- Ahora vamos a trabajar en el archivo activate pero podemos
 
		f1 - "Interpreter" - aqui debio aparecer (venv) no me aparecio en la terminal si aparece un error volver aqui
		
			o
				.\venv\Scripts\activate "Activar el entorno virtual OJO"
	
forma de arreglar el error del entorno virtual

	1-> Ejecuta el siguiente comando para permitir la ejecución de scripts solo en la sesión actual:
 
powershell

Copy

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

Luego, intenta activar el entorno virtual nuevamente:


powershell

Copy
	.\venv\Scripts\activate "Activar el entorno virtual OJO"

2. Cambiar la política de ejecución de forma permanente (si lo necesitas frecuentemente):
Abre PowerShell como administrador.

Ejecuta:

powershell

Copy

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

instalamos django

	-> pip install django

 -> RESUMEN <-
 
 	Si es un equipo que ya tiene todo instalado lo que debemos de hacer
  	
   	1. Creamos la carpeta con el nombre que deseamos
    	2. Se abre con visual studio se puede arrastras
     	3. Se crea la carpeta virtual que el comando es:
      		python -m venv venv
	4. En la terminal activamos el entorno virtual para esto hacemos el siguiente comando:
 		.\venv\Scripts\activate

 
-->> Backend <<--


con el siguiente comando podemos ver todas las opciones

django-admin

para comenzar el projecto vamos a escribir - "django_crud_api" -> este es el nombre que se le da al projecto se puede escribir el que se guste

django-admin startproject "django_crud_api"

el crea una carpeta pero en nuestro caso escribimos lo siguiente para que se cree dentro del projecto que ya tenemos

django-admin startproject django_crud_api .

para correr el projecto

python manage.py runserver

en la carpeta de 
	django_crud_api - settings.py -> vamos agregar una aplicación en 
 	INSTALLED_APPS = [
  
pero esto lo vamos hacer con un comando

para cancelar el runserver le damos ctrl + c -> para detener el proceso

python manage.py startapp tasks -> esto es para inicializar una  aplicación en este caso le colocamos el nombre de tasks

ahora en la parte de django_crud_api - settings.py

	INSTALLED_APPS = [
		'django.contrib.admin',
		'django.contrib.auth',
		'django.contrib.contenttypes',
		'django.contrib.sessions',
		'django.contrib.messages',
		'django.contrib.staticfiles',
	]

agregamos 'tasks' al final se coloca despues de la coma quedando

	INSTALLED_APPS = [
		'django.contrib.admin',
		'django.contrib.auth',
		'django.contrib.contenttypes',
		'django.contrib.sessions',
		'django.contrib.messages',
		'django.contrib.staticfiles',
		'tasks',
	]

colocamos el siguiente comando  lo siguiente es para crear todas las tablas y creo el db.sqlite3

 	python manage.py makemigrations
	python manage.py migrate

 	lo siguiente es para borrar toda la base de datos 

    	# Borra la base de datos y las migraciones
		rm db.sqlite3
		rm -r your_app/migrations/
	
volvemos a dar

	python manage.py runserver
 
podemos observar que ya no da ningun mensaje en rojo

-> SESION Django REST Framework <- 8.53

documentacion -> django-rest-framework.org

esto va instalar el modulo

	pip install djangorestframework
	
	necesitamos un modulo adicional para hacer comunicar el backend con el frontend - explicacion del porque 10.08
		pip install django-cors-headers
	
vamos a django_crud_api -> settings.py y en 

	INSTALLED_APPS = [ agregamos
	'corsheaders',
	'rest_framework',

Debemos agregarlo en 

	MIDDLEWARE = [ video - 11.19
		podemos buscarlo en google como django cors headers y llegamos a la siguiente pagina
			https://pypi.org/project/django-cors-headers/2.0.0/ 
		
para que sirve esta parte

	con rest_framework -> podemos crear API al instante
		cors-headers -> es un modulo que sirve para comunicarse con otro backed
		
al final del todo vamos agregar lo siguiente en el mismo archivo

	CORS_ALLOWED_ORIGINS = []

corremos el programa para ver que todo esta correcto

	python manage.py runserver

-> MODELO DE TAREAS <- 14.12

pyton tiene la forma de crear las tablas

	-> tasks -> models.py y creamos la clase Task
		ejecutamos la tablas, con el siguiente crea el codigo para ejecutar la tabla y esto se ubica en
  
			python manage.py makemigrations -> ejecutar
			-> migrations - 0001_initial.py
   
			para ejecutar la tabla
			python manage.py migrate -> ejecutar
			
	lo que estamos es creando las tablas dentro en db.sqlite3 que es la base de datos que utiliza django por defecto
	
para probar que se esta haciendo

correr - 

	python manage.py runserver 
	vamos a localhost que genera pero al final colocamos 
		/admin - para entrar a la parte de administrador
		
		debemos de crear un super usuario para poder ingresar
		python manage.py createsuperuser
		 se debe de colocar 
			username:
			email:
			password:
			repeat password:
		
		correr
		python manage.py runserver
	
	vamos a colocar la vista en el panel del administrador ya que cuando se ingresa no se logra visuaalizar 19:02
	-> tasks - admin.py
	
	al crear las tareas este no coloca un nombre adecuado sino que coloca 
		Task object (1) - esto no se entiende a primera vista para arreglar esto vamos 
			-> models.py y aquie colocamos que datos queremos ver y creamos el def __str__

-> CREACION DE API - QuerySet <- 20.50

en la carpeta de tasks creamos un archivo 

	serializer.py
	
	vamos a crear una vista aqui es donde estara el crud
	> tasks -> views.py

-> CREANDO LAS URLS <- 27.08

	Creamos un archivo en tasks
 
		urls.py
	vamos a 
 		> django_crud_api > urls.py
   
		 agregamos en urlpatterns = [
		 path('task/', include('tasks.urls')) - recordar que se debe agregar en import el include
		 
		correr		
		python manage.py runserver
	 
	 para probar que todo ha ido correctamente 30:54
		instalamos una extensions que hace lo mismo que postman 
			thunder client
			
-> DOCS - documentacion <- 36:04

Es para que documente nuestra informacion

	pip install coreapi
	>django_crud_api > settings.py
		en INSTALLED_APPS = [ agregamos encima tasks
			'coreapi',
		>tasks > urls.py
			path("docs/", include_docs_urls(title="doc_Tasks API"))
				y agregamos el from from rest_framework.documentation import include_docs_urls
    
		38:33>django_crud_api>settings.py
  			y se pega al final la informacion siguiente
			REST_FRAMEWORK = {				
				"DEFAULT_SCHEMA_CLASS": "rest_framework.schemas.coreapi.AutoSchema",
			}
			
		correr
		python manage.py runserver
		
		se visita en la pagina
		http://localhost:8000/tasks/docs/

	Se tuvo un error en coreapi y se soluciono de la siguiente forma
	
	Solución al Error "No module named 'coreapi'" en Django
 
El error que estás experimentando ocurre porque Django REST Framework (DRF) está intentando usar el paquete coreapi para la generación de documentación automática, pero este paquete no está instalado en tu entorno virtual.

Soluciones posibles:

1. Instalar los paquetes necesarios (recomendado)
   
Ejecuta estos comandos en tu terminal (con el entorno virtual activado):

	Soluciones definitivas:
1. Verifica que estés en el entorno virtual correcto
Activa el entorno virtual antes de instalar:

	bash
	Copy
	# Windows (PowerShell o CMD):

	.\venv\Scripts\activate

	Luego instala coreapi:
	
	bash
	Copy
	pip install coreapi

	2. Reinstala coreapi limpiando la caché
    
	Ejecuta estos comandos en orden:
	
	bash
	Copy

	-> pip uninstall coreapi coreschema -y
   
	-> pip cache purge
   
	-> pip install coreapi --no-cache-dir

-->> Frontend <<--

-> Configuracion de React <- 39:59
	vamos a utilizar vitejs.dev
debemos de verificar que node este instalado
	node --version
	
Crear el projecto
	npm create vite
		colocar un nombre: client
		elegir el frame. React
		variante. javascript
		
		entramos en la carpeta cd client
			npm install
			
		correr
			npm run dev
			
		-> para que se comunique nuestro frontend con nuestro backend <-
		instalando modulos
		npm i react-router-dom react-hot-toast axios react-hook-form 42:51
		
	> client > assents > App.jsx - quitamos el codigo
	rfce - para que salga el codigo rapido
	
	App.css - quitamoe el codigo
	index.css - quitamos todo
	
	creamos la carpetas dentro del >src
		- pages
		- components
		- api
	
	comenzamos con pages 45:00
		TaksPage.jsx
		TaskFormPage.jsx
		
		Vamos a App.jsx -> comenzamos a crear la navegacion de la pagina
		
	ingresamos a la carpeta de >components - creamos el archivo Navigation.jsx
	
	como creamos un componente esto lo vamos a colocar en la parte donde queremos que aparezca 52:36
	volvemos a
		App.jsx
		 <Navigation />
	
	correr
		npm run dev
		
	creamos un nuevo componente
		TaskList.jsx
		y lo importamos en el page de TasksPage.jsx

-> Peticion al Backend <- 54:50
	nos ubicamos TaskList.jsx y agregamos el useEffect
	
	>api creamos el archivo
		tasks.api.js 57:16
		
		volemos a TasksList.jsx aqui vamos a importar la funcion de tasks.api.js
		
	va aparecer un error de PERMISO
		> django_crud_api > settings.py
			en CORS_ALLOWED_ORIGINS = [] y agregamos
			CORS_ALLOWED_ORIGINS = ["http://localhost:5173"]
			
		agregamos el usestate al TasksList.jsx 10:01
		
		creamos en >components 
			el archivo TaskCard.jsx
			
	-- CREANDO TAREAS -- 1:05
		
		>pages > TaskFormPage.jsx
			useForm - sirve para guardar los datos del form
				investigar yup y zod que se utiliza para la parte de la validación de datos
				
			>api > tasks.api.js
				vamos agregar la funcion createTask -> para crear los datos
				
				volvemos a TaskFormPage.jsx para importar la informacionn que se creo en el API
					import { createTask }
					
	-- Eliminar Tareas -- 1:17
		> TasksList
			> TasksList.jsx y hacemos el recuadro
			en App.jsx
			<Route path="/tasks/:id" element={<TaskFormPage />} /> - con esta linea si tiene algun numero lo va a enviar a la pagina
			que se le dice
			
			en TaskCard.jsx
				En onClick cuando se presione no vas a llevar a la información para eliminar
				
			TaskFormPage.jsx
				agregamos al final el boton de eliminar
				
				vamos a borrar el boton de delete para que no aparezca en el momento de crear
				para esto vamos a utilizar el parametro
				
				useParams
				
				entramos a tasks.api.js -> y agregamos la funcion de deleteTask
		
	-- Consultar Tareas -- 1:26
		Se trabaja en TasksFormPage.jsx
			en la parte 
			
			const onSubmit = handleSubmit(async (data) => {
				//console.log(data)
				//const res = await createTask(data)
				//console.log(res)
				if (params.id) {
				  console.log('actualizando')
				} else {
				  await createTask(data)      
				}

				navigate('/tasks')
			  })
			
			en el archivo de tasks.api.js y agregamos el updateTask
		
	-- TailwindCSS y React -- 1:37
	
		- vamos a mostrar un mensaje en la parte inferior y para esto lo vamos a importar en
		App.jsx
		
			- importa Toaster
				tiene una pagina react-hot-toast-com
			
			- lo vamos a trabajar en TaskFormPage.jsx
			
			pagina tailwindcss.com
				- get started
					- Framework Guides
						se busca el framework
							https://tailwindcss.com/docs/installation/using-vite
							hay una parte que es improtar se debe hacer en el index.css
							
			archivos trabajados app.jsx, TaskList, TaskCard, Navigation, TaskFormPage			
		
