<template>
  <RetraceToolbar />
  <div>
    <div class="header"></div>

    <div class="screen">
      <h2 class="title">Calculadora Crediticia</h2>

      <div class="form-container">
        <form @submit.prevent="calculateMonthlyPayment">
          <div class="form-group">
            <label for="AnnualInterestRate" aria-label="Tasa de Interés Anual">Tasa de Interés Anual:</label>
            <input type="number" id="AnnualInterestRate" v-model.number="annualInterestRate" step="0.01" required aria-labelledby="AnnualInterestRate">
          </div>
          <div class="form-group">
            <label for="Term" aria-label="Plazo en meses">Plazo en meses:</label>
            <input type="number" id="Term" v-model.number="term" required aria-labelledby="Term">
          </div>
          <div class="form-group">
            <label for="Currency" aria-label="Moneda">Moneda:</label>
            <select id="Currency" v-model="currency" required aria-labelledby="Currency">
              <option value="Soles">Soles</option>
              <option value="Dollars">Dólares</option>
            </select>
          </div>
          <div class="form-group">
            <label for="PropertyPrice" aria-label="Precio de Inmueble">Precio de Inmueble:</label>
            <input type="number" id="PropertyPrice" v-model.number="propertyPrice" required aria-labelledby="PropertyPrice">
          </div>
          <div class="form-group">
            <label for="InitialFee" aria-label="Cuota Inicial">Cuota Inicial:</label>
            <input type="number" id="InitialFee" v-model.number="initialFee" required aria-labelledby="InitialFee">
          </div>
          <div class="form-group">
            <label for="AdditionalCosts" aria-label="Costos Adicionales">Costos Adicionales:</label>
            <input type="number" id="AdditionalCosts" v-model.number="additionalCosts" required aria-labelledby="AdditionalCosts">
          </div>
          <div class="form-group">
            <label for="AmountToBeFinanced" aria-label="Monto a Financiar">Monto a Financiar:</label>
            <input type="number" id="AmountToBeFinanced" v-model.number="amountToBeFinanced" required aria-labelledby="AmountToBeFinanced">
          </div>
          <div class="form-group readonly" v-if="monthlyPayment !== null">
            <label aria-label="Cuota Mensual">Cuota Mensual:</label>
            <div class="result">{{ monthlyPayment }}</div>
          </div>
          <button type="submit" aria-label="Calcular">Calcular</button>
        </form>
      </div>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import TheFooter from "@/core/public/components/the-footer.component.vue";
import RetraceToolbar from "@/core/shared/components/retrace-toolbar.component.vue";

export default {
  components: { RetraceToolbar, TheFooter },
  data() {
    return {
      annualInterestRate: null,
      term: null,
      currency: null,
      propertyPrice: null,
      initialFee: null,
      additionalCosts: null,
      amountToBeFinanced: null,
      monthlyPayment: null
    };
  },
  methods: {
    calculateMonthlyPayment() {
      if (this.annualInterestRate <= 0) {
        alert("La tasa de interés anual debe ser mayor que 0.");
        return;
      }
      if (this.term <= 0) {
        alert("El plazo en meses debe ser mayor que 0.");
        return;
      }
      if (this.propertyPrice <= 0) {
        alert("El precio del inmueble debe ser mayor que 0.");
        return;
      }
      if (this.initialFee < 0) {
        alert("La cuota inicial no puede ser negativa.");
        return;
      }
      if (this.additionalCosts < 0) {
        alert("Los costos adicionales no pueden ser negativos.");
        return;
      }
      if (this.amountToBeFinanced <= 0) {
        alert("El monto a financiar debe ser mayor que 0.");
        return;
      }
      if (this.initialFee + this.additionalCosts >= this.amountToBeFinanced) {
        alert("La cuota inicial y los costos adicionales no pueden ser mayores o iguales al monto a financiar.");
        return;
      }

      const loanAmount = this.amountToBeFinanced - this.initialFee - this.additionalCosts;
      const monthlyInterestRate = (this.annualInterestRate / 100) / 12;
      if (monthlyInterestRate > 0) {
        const numerator = loanAmount * monthlyInterestRate;
        const denominator = 1 - Math.pow(1 + monthlyInterestRate, -this.term);
        this.monthlyPayment = (numerator / denominator).toFixed(2);
      } else {
        this.monthlyPayment = (loanAmount / this.term).toFixed(2);
      }
    }
  }
};
</script>

<style scoped>
.header {
  height: 50px;
  background-color: blue;
}

.screen {
  background-color: #ccc;
  padding: 20px;
  text-align: center;
}

.title {
  margin-top: 0;
  color: black;
  font-weight: normal;
}

.form-container {
  border: 2px solid yellow;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.readonly .result {
  background-color: transparent;
  border: none;
  padding: 0;
  font-weight: bold;
}

label {
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 10px;
}

button {
  width: 100%;
  padding: 10px;
}
</style>
