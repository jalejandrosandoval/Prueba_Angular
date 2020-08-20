<p>
    <h2 align="center"> API REST </h2>
</p>

## Conection Database

Para conectarse y crear una base de datos desde 0 a través de migraciones se debe modificar el appsettings.json del proyecto WebApi, más exactamente la siguiente linea:

```bash
"ConnectionStrings": {
    "DevConection": "Data Source='DataBase_Name';Database=S.O.D_BD;Trusted_Connection=True"
  },
```

Allí se reemplaza 'DataBase_Name' por el nombre del servidor local o externo de la base de datos, en cuyo caso debe ser gestionado a través de el SGBD de SQLSERVER (SSMS).

## Migraciones

### Configuraciones Previas

Se debe tener en cuenta:

* Realizar las respectivas configuraciones en el archiivo STARTUP. Más exactamente en el metodo ConfigureServices; allí es donde realmente se realizan las configuraciones del Cors, del JWT, de Migracion de BD y de Serializar los archivos por JSON.

```bash
public void ConfigureServices(IServiceCollection services)
{

  // Migrations through DBContext

  services.AddDbContext<AppDbContext>(options =>
      options.UseSqlServer(
      Configuration.GetConnectionString("DevConectionBD")));

  // Enable Cors

  services.AddCors(options =>
    {
    options.AddPolicy("AllowSpecificOrigin",
      builder =>
      {
        builder.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin()
      ;
    });
  });

  // Serializable by JSON

  services.AddControllersWithViews()
    .AddNewtonsoftJson(options =>
      options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
  );

  //JWT

  services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
      options.TokenValidationParameters = new TokenValidationParameters
      {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = Configuration["Jwt:Issuer"],
        ValidAudience = Configuration["Jwt:Issuer"],
        IssuerSigningKey = new SymmetricSecurityKey
        (Encoding.UTF8.GetBytes(Configuration["Key"])),
        ClockSkew = TimeSpan.Zero
      }
    );

  services.AddControllers();

}
```

### Sentencias para la Migración

Para ello se debe: 
* Abrir la consola de admistración de paquetes.
* Verificar que se encuentre en el Proyecto donde esta <DbContext>.
* Dar un nombre a la migración.

```bash
PM> Add-Migration 'NameMigration'
```

* Actualizar la Base de Datos o en su debido caso, crearla de 0.

```bash
PM> Update-Database
```
