import Head from 'next/head';
import { Inter } from '@next/font/google';
import React from 'react';
import Chart from 'chart.js/auto';
import { numeralNutritions } from 'src/constants/numeralNutritions';

const inter = Inter({ subsets: ['latin'] });

export default function Home(props: any) {
  const nutritionArr = numeralNutritions;
  const [xAxis, setXAxis] = React.useState('calories');
  const [yAxis, setYAxis] = React.useState('carbo');

  React.useEffect(() => {
    let myChart: any = null;
    const cereals = props.cereals.map((cereal: any) => {
      return { x: cereal[xAxis], y: cereal[yAxis] };
    });
    const config: any = {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: '80 Cereals',
            backgroundColor: 'rgb(255, 99, 132)',
            data: cereals,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: xAxis[0].toUpperCase().concat(xAxis.slice(1,)),
              font: {
                size: 20,
                weight: 'bold',
                lineHeight: 1.2,
              },
              padding: { top: 20, left: 0, right: 0, bottom: 0 },
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: yAxis[0].toUpperCase().concat(yAxis.slice(1,)),
              font: {
                size: 20,
                weight: 'bold',
                lineHeight: 1.2,
              },
              padding: { top: 20, left: 0, right: 0, bottom: 0 },
            },
          },
        },
      },
    };
    myChart = new Chart(
      document.getElementById('myChart') as HTMLCanvasElement,
      config
    );
    return () => {
      myChart.destroy();
    };
  }, [xAxis, yAxis]);
  return (
    <>
      <Head>
        <title>chart-js-app</title>
        <meta name="description" content="Chart.jsで散布図を表示するアプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section style={{ padding: '10pt' }}>
          <h1>chart-js-app</h1>
          <p>シリアルのデータ</p>
          <div className="relative w-full lg:max-w-sm">
            <label>
              X axis:
              <select
                value={xAxis}
                defaultValue={xAxis}
                onChange={e => setXAxis(e.target.value)}
              >
                {
                  nutritionArr.map((nutrition: string, index) => {
                    return <option value={nutrition} key={index}>{nutrition}</option>
                  })
                }
              </select>
            </label>
          </div>
          <div className="relative w-full lg:max-w-sm">
            <label>
              Y axis:
              <select
                value={yAxis}
                defaultValue={yAxis}
                onChange={e => setYAxis(e.target.value)}>
                {
                  nutritionArr.map((nutrition: string, index) => {
                    return <option value={nutrition} key={index}>{nutrition}</option>
                  })
                }
              </select>
            </label>
          </div>
          <div style={{ width: '400pt' }}>
            <canvas id="myChart" width="300" height="300"></canvas>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const response = await fetch('http://localhost:3000/api/cereals');
  const cereals = await response.json();
  return {
    props: { cereals },
  };
}
