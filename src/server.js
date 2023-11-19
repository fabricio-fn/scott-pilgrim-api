const fastify = require('fastify')({
  logger: true,
});

const characters = require('./db/characters.json');

fastify.get('/character', function (request, reply) {
  reply.send(characters);
});

fastify.get('/character/:id', function (request, reply) {
  const characterId = parseInt(request.params.id);
  const character = characters.find(
    (character) => character.id === characterId
  );

  if (character) {
    reply.send(character);
  } else {
    reply.code(404).send({ error: 'Character not found' });
  }
});

fastify.listen({ port: 3333 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
