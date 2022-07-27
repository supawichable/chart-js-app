window.onload = function () {
  axios.get('/api/cereals')
    .then(function (response) {
      const data = response.data.map((cereal) => {
        return { x: cereal.calories, y: cereal.carbo }
      })

      const config = {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "80 Cereals",
              backgroundColor: 'rgb(255, 99, 132)',
              data: data
            }
          ],
        },
        options: {
          plugins: {
            legend: {
              position: 'bottom'
            }
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Calories',
                font: {
                  size: 20,
                  weight: 'bold',
                  lineHeight: 1.2,
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 }
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Carbo',
                font: {
                  size: 20,
                  weight: 'bold',
                  lineHeight: 1.2,
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 }
              }
            },
          },
        },
      };
      const ctx = document.getElementById("myChart");
      const myChart = new Chart(ctx, config);
    })

};
