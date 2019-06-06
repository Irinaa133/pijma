## Табы

Taбы – или вкладки это компонент, который предназначен для отображения большого количества контента в пределах небольшой области переключая его с помощью ярлычков, вкладок и панелей.

```jsx
<Card r={10} bg="#fff" s="0 8px 16px 0 rgba(0, 0, 0, 0.12)">
  <Tabs>
    <TabList>
      <Tab icon={
        <Icon name="star"/>
      }>
        Первый таб
      </Tab>
      <Tab icon={
        <Icon name="terminal"/>
      }>
        Второй таб
      </Tab>
      <Tab icon={
        <Icon name="user"/>
      }>
        Третий таб
      </Tab>
    </TabList>
    <TabPanel>
      <Box>То, насколько легко обнаружить планету по колебаням светимости ее звезды во время прохождения планеты между звездой и наблюдателем, зависит от размера планеты и от того, насколько ее орбита удалена от звезды. Наша Земля находится довольно близко к Солнцу, поэтому из других планетных систем ее разглядеть проще.</Box>
      <Box>Каждое основание на одной из цепей связывается с одним определённым основанием на второй цепи. Такое специфическое связывание называется комплементарным. Пурины комплементарны пиримидинам (то есть способны к образованию водородных связей с ними): аденин образует связи только с тимином, а цитозин — с гуанином. В двойной спирали цепочки также связаны с помощью гидрофобных взаимодействий и стэкинга, которые не зависят от последовательности оснований ДНК.</Box>
      <Box>Комплементарность двойной спирали означает, что информация, содержащаяся в одной цепи, содержится и в другой цепи. Обратимость и специфичность взаимодействий между комплементарными парами оснований важна для репликации ДНК и всех остальных функций ДНК в живых организмах.</Box>
    </TabPanel>
  </Tabs>
</Card>
```
```jsx
<Tabs>
  <TabList>
    <Tab>Первый таб</Tab>
    <Tab>Второй таб</Tab>
    <Tab>Третий таб</Tab>
  </TabList>
  <TabPanel>
    <Box>То, насколько легко обнаружить планету по колебаням светимости ее звезды во время прохождения планеты между звездой и наблюдателем, зависит от размера планеты и от того, насколько ее орбита удалена от звезды. Наша Земля находится довольно близко к Солнцу, поэтому из других планетных систем ее разглядеть проще.</Box>
    <Box>Каждое основание на одной из цепей связывается с одним определённым основанием на второй цепи. Такое специфическое связывание называется комплементарным. Пурины комплементарны пиримидинам (то есть способны к образованию водородных связей с ними): аденин образует связи только с тимином, а цитозин — с гуанином. В двойной спирали цепочки также связаны с помощью гидрофобных взаимодействий и стэкинга, которые не зависят от последовательности оснований ДНК.</Box>
    <Box>Комплементарность двойной спирали означает, что информация, содержащаяся в одной цепи, содержится и в другой цепи. Обратимость и специфичность взаимодействий между комплементарными парами оснований важна для репликации ДНК и всех остальных функций ДНК в живых организмах.</Box>
  </TabPanel>
</Tabs>
```

```jsx
<Tabs>
  <TabList border={true}>
    <Tab>Первый таб</Tab>
    <Tab>Второй таб</Tab>
    <Tab>Третий таб</Tab>
  </TabList>
  <TabPanel>
    <Box>То, насколько легко обнаружить планету по колебаням светимости ее звезды во время прохождения планеты между звездой и наблюдателем, зависит от размера планеты и от того, насколько ее орбита удалена от звезды. Наша Земля находится довольно близко к Солнцу, поэтому из других планетных систем ее разглядеть проще.</Box>
    <Box>Каждое основание на одной из цепей связывается с одним определённым основанием на второй цепи. Такое специфическое связывание называется комплементарным. Пурины комплементарны пиримидинам (то есть способны к образованию водородных связей с ними): аденин образует связи только с тимином, а цитозин — с гуанином. В двойной спирали цепочки также связаны с помощью гидрофобных взаимодействий и стэкинга, которые не зависят от последовательности оснований ДНК.</Box>
    <Box>Комплементарность двойной спирали означает, что информация, содержащаяся в одной цепи, содержится и в другой цепи. Обратимость и специфичность взаимодействий между комплементарными парами оснований важна для репликации ДНК и всех остальных функций ДНК в живых организмах.</Box>
  </TabPanel>
</Tabs>
```

```jsx
<Tabs>
  <TabList
    vertical={true}
    center={true}
  >
    <Tab icon={
      <Icon name="mobile"/>
    }>
      Баланс <br/> телефона
    </Tab>
    <Tab icon={
      <Icon name="card"/>
    }>
      Банковской <br/> картой
    </Tab>
    <Tab icon={
      <Icon name="terminal"/>
    }>
      Наличными <br/> в терминале
    </Tab>
  </TabList>
  <TabPanel>
    <Box>То, насколько легко обнаружить планету по колебаням светимости ее звезды во время прохождения планеты между звездой и наблюдателем, зависит от размера планеты и от того, насколько ее орбита удалена от звезды. Наша Земля находится довольно близко к Солнцу, поэтому из других планетных систем ее разглядеть проще.</Box>
    <Box>Каждое основание на одной из цепей связывается с одним определённым основанием на второй цепи. Такое специфическое связывание называется комплементарным. Пурины комплементарны пиримидинам (то есть способны к образованию водородных связей с ними): аденин образует связи только с тимином, а цитозин — с гуанином. В двойной спирали цепочки также связаны с помощью гидрофобных взаимодействий и стэкинга, которые не зависят от последовательности оснований ДНК.</Box>
    <Box>Комплементарность двойной спирали означает, что информация, содержащаяся в одной цепи, содержится и в другой цепи. Обратимость и специфичность взаимодействий между комплементарными парами оснований важна для репликации ДНК и всех остальных функций ДНК в живых организмах.</Box>
  </TabPanel>
</Tabs>
```