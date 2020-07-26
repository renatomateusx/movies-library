import React, { useRef, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';

import punisher from './assets/punisher.jpg';
import badboy from './assets/badboy.jpg';
import blackwidow from './assets/blackwidow.jpg';
import topgun from './assets/topgun.jpeg';
import freeguy from './assets/freeguy.jpg';
import blood from './assets/blood.jpg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function App() {
  const carouselRef = useRef(null);

  const [lista, setLista] = useState([
    {
      title: "O Justiceiro",
      text: "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
      release: 2018,
      img: punisher
    },
    {
      title: "Bad Boys for life",
      text: "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
      release: 2020,
      img: badboy
    },
    {
      title: "Viúva Negra",
      text: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
      release: 2020,
      img: blackwidow
    },
    {
      title: "Top Gun: MAVERICK",
      text: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
      release: 2020,
      img: topgun
    },
    {
      title: "BloodShot",
      text: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
      release: 2020,
      img: blood
    },
    {
      title: "Free Guy",
      text: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
      release: 2020,
      img: freeguy
    },
  ]);

  const [background, setBrackground] = useState(lista[0].img);
  const [activeBox, setActiveBox] = useState(0);

  const toRender = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <Image
            source={item.img}
            style={styles.carouselImg}
          />
          <Text style={styles.carouselText}>{item.title}</Text>
          <Icon name="play-circle-outline" size={30} color="#FFF" style={styles.carouselIcon} />
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, height: screenHeight }}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground source={background} style={styles.imgBg} blurRadius={8} >
            <View style={styles.viewSearch}>
              <TextInput style={styles.input} placeholder="Procurando Algo?" />
              <TouchableOpacity style={styles.color}>
                <Icon name="search" color="#000" size={25} />
              </TouchableOpacity>
            </View>
            <Text style={{ color: '#FFF', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginVertical: 10, }}>
              Acabou de Chegar!
          </Text>
            <View style={styles.slideView}>
              <Carousel
                style={styles.carousel}
                ref={carouselRef}
                data={lista}
                renderItem={toRender}
                sliderWidth={screenWidth}
                itemWidth={200}
                inactiveSlideOpacity={0.5}
                onSnapToItem={(index) => {
                  setBrackground(lista[index].img);
                  setActiveBox(index);
                }}
              />
            </View>
            <View style={styles.moreInfo}>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.movieTitle}>{lista[activeBox].title}</Text>
                <Text style={styles.movieDesc}>{lista[activeBox].text}</Text>
              </View>
              <TouchableOpacity style={{ marginRight: 15, marginTop: 10 }} onPress={() => alert('Clicked!')}>
                <Icon name="queue" color="#131313" size={30} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>

    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgBg:{
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  },
  viewSearch:{
    marginTop: 20,
    backgroundColor: '#FFF',
    elevation: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input:{
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 15
  },
  slideView:{
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel:{
    flex: 1,
    overflow: 'visible'
  },
  carouselImg:{
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText:{
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon:{
    position: 'absolute',
    top: 15,
    right: 15,
  },
  moreInfo:{
    backgroundColor: '#FFF',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  movieTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5
  },
  movieDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold'
  }
})