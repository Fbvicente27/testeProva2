$(document).ready(function()
{
	$.ajax(
	{
		type: 'GET',
		url: 'http://swapi.co/api/planets/' ,
		dataType: 'json',
		data: { get_param: 'value' },
		error: function (erro) 
		{
			alert(erro.responseText);
		},

		success: function(data)
		{
			var divPlanet = document.querySelector("#divListagemPlaneta");
			divPlanet.innerHTML = "";
			$.each (data.results, function(i, obj)
			{
				divPlanet.innerHTML += '<a href="javascript:mostrarPlanetas(\'' + obj.url + 
				'\')" >' + obj.name + '</a> <br />';
			})
			
			
		}
	})

})

$(document).ready(function()
{
	$.ajax(
	{
		type: 'GET',
		url: 'http://swapi.co/api/people/' ,
		dataType: 'json',
		data: { get_param: 'value' },
		error: function (erro) 
		{
			alert(erro.responseText);
		},

		success: function(data)
		{
			var divPerson = document.querySelector("#divListaPersonagem");
			divPerson.innerHTML = "";
			$.each (data.results, function(i, obj)
			{
				divPerson.innerHTML += '<a href = "javascript:mostrarPersonagem(\'' + obj.url + '\')" >' + obj.name + 
				'</a> </br>'; 
			})
			
			
		}
	})

})

$(document).ready(function()
{
	$.ajax(
	{
		type: 'GET',
		url: 'http://swapi.co/api/starships/' ,
		dataType: 'json',
		data: { get_param: 'value' },
		error: function (erro) 
		{
			alert(erro.responseText);
		},

		success: function(data)
		{
			var divPerson = document.querySelector("#divListaNave");
			divPerson.innerHTML = "";
			$.each (data.results, function(i, obj)
			{
				divPerson.innerHTML += '<a href = "javascript:mostrarNave(\'' + obj.url + '\')" >' + obj.name + 
				'</a> </br>'; 
			})
			
			
		}
	})

})



function mostrarPlanetas(Purl)
{
	$.ajax(
	{
		type: 'GET',
		url: Purl,
		dataType: 'json',
		data: { get_param: 'value' },
		error: function(erro)
		{
			alert(erro.responseText);
		},
		
		success: function(data)
		{
			var divPlaneta = document.querySelector("#informacaoPlaneta");
			divPlaneta.innerHTML = "";
			divPlaneta.innerHTML += "Nome do Planeta: " + data.name + 
						"<br /> Període de Rotação: " + data.rotation_period + 
						"<br /> Período em Orbita: " + data.orbital_period + 
						"<br /> População do Planeta: " + data.population + "<br />"; 
		}
	})
}

function mostrarPersonagem(Purl)
{
	$.ajax(
	{
		type: 'GET',
		url: Purl,
		dataType: 'json',
		data: { get_param: 'value' },
		error: function(erro)
		{
			alert(erro.responseText);
		},
		
		success: function(data)
		{
			var divPersonagem = document.querySelector("#informacaoPersonagem");
			divPersonagem.innerHTML = "";
			divPersonagem.innerHTML += "Nome do Personagem: " + data.name + 
						"<br /> Ano de Nascimento: " + data.birth_year + 
						"<br /> Planeta natal: " + data.homeworld + 
						"<br /> Sexo: " + data.gender + "<br />"; 
			
		}
	})
}

function mostrarNave(Purl)
{
	$.ajax(
	{
		type: 'GET',
		url: Purl,
		dataType: 'json',
		data: { get_param: 'value' },
		error: function(erro)
		{
			alert(erro.responseText);
		},
		
		success: function(data)
		{
			var divNave = document.querySelector("#informacaoNave");
			divNave.innerHTML = "";
			divNave.innerHTML += "Nome da Nave: " + data.name + 
						"<br /> Modelo: " + data.model + 
						"<br /> Fabricante: " + data.manufacturer + 
						"<br /> Velocidade máx.: " + data.max_atmosphering_speed + "<br />"; 
			
		}
	})
}