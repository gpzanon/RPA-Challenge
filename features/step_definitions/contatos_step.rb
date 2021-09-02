Entao (/^carregue a lista de contatos e preencher os dados dos contatos e salvar no banco de dados/ ) do
  #contando a quantidade de rgistros do arquivo csv
  @counter = 0
  file = File.join(Rails.root, 'public', 'contatos.csv')  
  file_read = File.new(file, "r")
  while (line = file_read.gets)
     cadastrar_dados(line)
     @counter += 1
  end
  file_read.close
end 

def cadastrar_dados(line)
    nome,cidade,estado,cep,email,telefone,assunto,mensagem = line.split(';')
    visit("https://seguralta.com.br/site/contato")
    fill_in("nome", :with => nome.strip)
    fill_in("cidade", :with => cidade.strip)
    fill_in("estado", :with => estado.strip)
    fill_in("cep", :with => cep.strip)
    fill_in("email", :with => email.strip)
    fill_in("telefone", :with => telefone.strip)
    fill_in("assunto", :with => assunto.strip)
    fill_in("mensagem", :with => mensagem.strip)
    page.find("#btn success").click
end

Entao (/^validar a quantidade de contatos cadastrados/)do
visit("https://seguralta.com.br/site/contato")
 header = 1
 page.all()
end