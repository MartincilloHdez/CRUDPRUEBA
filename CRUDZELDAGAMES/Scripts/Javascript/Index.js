GetZeldaGames();

function GetZeldaGames() {
    $("#divUpdate").hide();
    $.ajax({
        url: "/Home/GetZeldaGames",
        type: "POST",
        cache: "false",
        success: function (data) {
            $("#tbCuerpo").html("");
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    var tr = `<tr id="tr` + data[i].Id + `">
                    <td>`+ data[i].Id + `</td>
                    <td>`+ data[i].Nombre + `</td>
                    <td>`+ data[i].Año + `</td>
                    <td>`+ data[i].Consola + `</td>
                    <td><i class="fa-solid fa-pencil color-blue i" onclick='Update("${data[i].Id}","${data[i].Nombre}","${data[i].Año}","${data[i].Consola}");'></i> <i class="fa-solid fa-circle-xmark color-red i" onclick='Delete("${data[i].Id}","${data[i].Nombre}")'></i></td>
                    </tr>`;
                    $("#tbCuerpo").append(tr);
                }
            } else {
                var tr = `<tr>
                  <td colspan="5" class="text-center">No hay datos para mostrar</td>
                  </tr>`;
                $("#tbCuerpo").append(tr);
            }

        },
        error: function (response) {
            alert("Error Status");
        }
    });
}

function Update(id,name,year,consola) {
    $("#divUpdate").show();
    $("#txtUpdName").val(name);
    $("#txtUpdYear").val(year);
    $("#txtUpdConsole").val(consola);
    $("#txtId").val(id);
}

function Delete(id, name) {
    Swal.fire({
        title: '¿Estas seguro que quieres eliminar este juego: ' + name + '?',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `Salir`,
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/Home/UpdZeldaGame",
                type: "POST",
                cache: "false",
                data: { "Id": id, "Visible": false },
                success: function (data) {
                    if (data == "ok") {
                        GetZeldaGames();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Juego Eliminado',
                            showConfirmButton: false,
                            timer: 1500
                        });

                        $("#txtId").val("");
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: data,
                        })
                    }

                },
                error: function (response) {
                    alert(response);
                }
            });
        }
    })
    
}


$("#btnAddjuego").click(function () {
    let nombre = $("#txtAddName").val();
    let año = $("#txtAddYear").val();
    let consola = $("#txtAddConsole").val();

    if (nombre && año && consola) {
        if (año >= 1980 && año <= 2025) {
            $.ajax({
                url: "/Home/AddZeldaGame",
                type: "POST",
                cache: "false",
                data: { "Nombre": nombre, "Año": año, "Consola": consola },
                success: function (data) {
                    if (data == "ok") {
                        GetZeldaGames();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Juego Agregado',
                            showConfirmButton: false,
                            timer: 1500
                        });

                        $("#txtAddName").val("");
                        $("#txtAddYear").val("");
                        $("#txtAddConsole").val("");
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: data,
                        })
                    }

                },
                error: function (response) {
                    alert(response);
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingrese un año entre 1980 y 2025',
            })
            $("#txtAddYear").focus();
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Favor de llenar todos los campos para ingresar un nuevo juego',
        })
        
    }
    
});

$("#btnUpdjuego").click(function () {
    let nombre = $("#txtUpdName").val();
    let año = $("#txtUpdYear").val();
    let consola = $("#txtUpdConsole").val();
    let id = $("#txtId").val();

    if (nombre && año && consola) {
        if (año >= 1980 && año <= 2025) {
            $.ajax({
                url: "/Home/UpdZeldaGame",
                type: "POST",
                cache: "false",
                data: {"Id":id, "Nombre": nombre, "Año": año, "Consola": consola, "Visible": true },
                success: function (data) {
                    if (data == "ok") {
                        GetZeldaGames();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Juego Actualizado',
                            showConfirmButton: false,
                            timer: 1500
                        });

                        $("#txtUpdName").val("");
                        $("#txtUpdYear").val("");
                        $("#txtUpdConsole").val("");
                        $("#txtId").val("");
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: data,
                        })
                    }

                },
                error: function (response) {
                    alert(response);
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingrese un año entre 1980 y 2025',
            })
            $("#txtAddYear").focus();
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Favor de llenar todos los campos para actualizar los datos del juego',
        })

    }

});

$("#btncancel").click(function () {
    $("#divUpdate").hide();
    $("#txtUpdName").val("");
    $("#txtUpdYear").val("");
    $("#txtUpdConsole").val("");
    $("#txtId").val("");
});