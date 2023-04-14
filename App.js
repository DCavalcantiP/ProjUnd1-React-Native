import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function App() {

  const itens = [

    {
      tipo: 'Ação', key: 1,
      desc: "Um jogo eletrônico de ação é um tipo de jogo eletrônico que desafia a velocidade, reflexo e raciocínio rápido do jogador."
    },
    {
      tipo: 'Aventura', key: 2,
      desc: 'Jogos de aventura, também conhecidos como adventures, são jogos eletrônicos cuja ênfase é focada no enredo e não na ação.'
    },
    {
      tipo: 'Terror', key: 3,
      desc: 'Um jogo de terror é um gênero de videogame centrado na ficção de terror e normalmente projetado para assustar o jogador.'
    },
    {
      tipo: 'RPG', key: 4,
      desc: 'Um RPG eletrônico é um gênero de jogo em que o jogador controla as ações de um ou mais personagens imersos num mundo bem definido, incorporando elementos dos RPGs tradicionais, compartilhando geralmente a mesma terminologia, ambientações e mecânicas de jogo.'
    },
    {
      tipo: 'FPS', key: 5,
      desc: 'FPS é a abreviação para First Person Shooter. Este gênero de jogo traz o jogador para uma perspectiva de câmera em primeira pessoa, portando armas de fogo em combates, geralmente, de cinco contra cinco.'
    },
    {
      tipo: 'Esporte', key: 6,
      desc: 'Um jogo de esporte ou jogo de desporto é um jogo eletrônico de PC ou videogame que simula esportes tradicionais.'
    },
    {
      tipo: 'Corrida', key: 7,
      desc: 'Um jogo eletrônico de corrida é um gênero de jogos eletrônicos em que o jogador participa de competições de corrida com qualquer tipo de veículo terrestre, inclusive motocicletas e quadriciclos.'
    },
    {
      tipo: 'Simulador', key: 8,
      desc: 'Um jogo eletrônico de simulação, ou simplesmente jogo de simulação descreve uma diversa super-categoria de jogos eletrônicos para computadores e videogames.'
    },
    {
      tipo: 'Estratégia', key: 9,
      desc: 'Jogo de Estratégia é um gênero de Video-game onde enfatiza habilidades de pensamento e planejamento para alcançar a vitória.'
    },

  ]
  const [itensb, setName] = useState(false);
  const click = () => {

    setName(!itensb);

  }

  const [select, selecao] = useState(null);

  return (
    <SafeAreaView>
      <Text style={styles.titulo}>LOJÃO DOS GAMES</Text>
      <ScrollView>

        <View style={styles.container}>
          <View style={styles.caixa}>
            <Entypo style={styles.icone} name="key" size={25} color="black" />
            <TextInput style={styles.logon} placeholder='Login'></TextInput>
          </View>

          <View style={styles.caixa}>
            <FontAwesome style={styles.icone} name="lock" size={29} color="black" />
            <TextInput keyboardType='numeric' style={styles.logon} placeholder='Senha'></TextInput>
          </View>

          <View style={styles.botaobg}>
            <Button style={styles.botao} title='LOGIN' onPress={() => Alert.alert('Usuário Logado!')}/>
          </View>

          <View style={styles.botaobg}>
            <Button style={styles.botao} title='ESCONDER' onPress={click}></Button>
          </View>

          {
            itensb ?
              <Text> </Text>
              :
              <FlatList

                numColumns={3}
                keyExtractor={(item) => item.key}
                data={itens}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => selecao(item.desc)}>
                    <Text style={styles.styitens1}>{item.tipo}</Text>
                  </TouchableOpacity>
                )}
                KeyExtractor={item => item.key}

              />
          }

          <Text style={styles.descricao}>{select}</Text>

          <StatusBar style="auto" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {

    flexbox: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  titulo: {

    color: 'purple',
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'green',
    fontWeight: 'bold',

  },

  caixa: {

    flexDirection: 'row',
    justifyContent: 'space-around'

  },

  icone: {

    padding: 15,

  },

  botaobg: {

    marginTop: 50,
    backgroundColor: 'lightgray',
    borderWidth: 3,
    borderRadius: 7,
    height: 50,
    width: 120,

  },

  botao: {

    borderRadius: 10,

  },

  logon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 200,

  },

  descricao: {
    backgroundColor: 'yellow',
    fontSize: 25,
    borderRadius: 10,
    borderWidth: 5,
    margin: 30,

  },

  styitens1: {

    backgroundColor: 'lightblue',
    marginTop: 20,
    padding: 30,
    width: 400,
    fontSize: 25,
    borderWidth: 2,
    borderRadius: 25,
    overflow: 'hidden',
    textAlign: 'center',

  },

  styitens2: {

    backgroundColor: 'lightblue',
    marginTop: 20,
    padding: 30,
    width: 400,
    fontSize: 25,
    borderWidth: 2,
    borderRadius: 25,
    overflow: 'hidden',
    textAlign: 'center',

  },
});
