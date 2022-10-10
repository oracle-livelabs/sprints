# Como criar filtros de tempo relativos em Oracle Analytics Cloud (OAC)?

Duração: 1 minuto

Trabalhando com colunas de data em seu dataset no Oracle Analytics Cloud, você pode criar um filtro de tempo relativo para suas visualizações. The relative time filter allows you to create a date filter relative to today's date whether that's looking at data from the past or looking at a projection into the future. The three settings you can modify are the Type, Increment, and Time Level. To learn more about como to create a relative date filter and the options associated with it, read the following instructions below.

## Relative time filter
>**Nota:** Você deve ter o cargo **DV Content Author** para executar os próximos passos.

1. Em seu workbook, encontre a coluna **Date** em **Data Panel** e arraste para a barra "filtro" no topo do dashboard.

    ![Drop date](images/drop-date.png)

2. Selecione a opção **Menu** no filtro de **Date** clicando nos três pontinhos.

    ![Menu option](images/date-menu.png)

3. Selecione **Filter Type**, então Selecione **Relative Time**. Isso irá mostrar as configurações para o filtro de tempo relativo.

    ![Reltaive time](images/relative-time.png)

4. Aqui você pode mudar três configurações: Type, Increment, and Time Level. O seguinte exemplo cria um filtro de tempo para os últimos 3 meses.

    ![Options](images/options.png)

    **Type** Permite escolher uma das 3 opções:
    * Last: Inclui dados dos últimos N incrementos de tempo contando de hoje
    * Next: Inclui dados dos próximos N incrementos de tempo contando de hoje (funciona apenas se os dados constarem projeções futuras)
    * To Date: Inclui dados desde o início dos registros até a data selecionada

    **Increment** permite selecionar o número de incrementos que você deseja ver seu tipo de filtro.

    **Time Level** permite escolher a granularidade do tempo desde anos até segundos.

Parabéns, você aprendeu a criar filtros de tempo relativos em Oracle Analytics Cloud (OAC)!

## Saiba mais

* [Filtros de tempo relativos](https://www.wegobeyond.co.uk/oracle-analytics-cloud-105-2-new-feature-focus-relative-time-filters/)

## Acknowledgements
* **Author** - Nagwang Gyamtso, Product Manager, Product Strategy
* **Tradução** - Isabel Giannecchini, Cloud Engineer, Brazil Data & AI Team
* **Última Atualização** - Isabel Giannecchini,  Outubro 2022