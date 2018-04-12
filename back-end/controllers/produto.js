var produtos = [
   {
      codigo: 1101,
      descricao: 'Notebook Intel Core i7 8GB',
      preco: 2799,
      quantidade: 3,      
      especificacao: 'Numero Processador: i7-3770 - Numero de Nucleos: 4 - Tipo de memória: DDR3 1333/1600'
   },
   {
      codigo: 1102,
      descricao: 'Notebook Intel Core i5 6GB',
      preco: 2399,
      quantidade: 2,      
      especificacao: 'Numero Processador: i5-3880 - Numero de Nucleos: 4 - Tipo de memória: DDR2 1223/1500'
   },
   {
      codigo: 1201,
      descricao: 'Smartphone LG K10',
      preco: 579,
      quantidade: 4,      
      especificacao: 'Memoria: 16 GB - Versão do Android: 6.0 - Video: Full/HD'
   },
   {
      codigo: 1202,
      descricao: 'Smartphone Samsung J7',
      preco: 679,
      quantidade: 6,      
      especificacao: 'Memoria: 32 GB - Versao do Android: 7.0 - Display: 5.3'
   }
]

module.exports = function() {

   controller = {};

   // Retorna todos os objetos da coleção
   controller.listar = function(req, res) {
      res.json(produtos).end();
   }

   // Retorna um único objeto da coleção
   controller.obterUm = function(req, res) {
      var id = req.params.id;
      var encontrado = produtos.find(function(p) {
         return p.codigo == id;
      });

      if(encontrado) {
         res.json(encontrado).end();
      }
      else {
         res.status(404).end();
      }
   }

   return controller;

}