<script setup>
import InputForm from "@/components/core/InputForm.vue";
import InputDatalist from "@/components/core/InputDatalist.vue";
import IconsFa from "@/components/core/IconsFa.vue";
import Text from "@/components/core/Text.vue";
</script>

<script>
export default {
	data() {
		return {
			amount1: {
				type: Number
			},
			amount2: {
				type: Number
			},
			coin1: {
				type: String
			},
			coin2: {
				type: String
			}
		}
	},
	mounted() {
		this.loadCoins();
	},
	methods: {
		loadCoins() {
			this.filDatalists(convert.list);
			if(
				localStorage.getItem("amount1") == null &&
				localStorage.getItem("amount2") == null &&
				localStorage.getItem("coin1") == null &&
				localStorage.getItem("coin2") == null
			) {
				this.amount1 = "1"
				this.amount2 = "5.08"
				this.coin1 = "usd"
				this.coin2 = "brl"
			} else {
				this.amount1 = localStorage.getItem("amount1");
				this.amount2 = localStorage.getItem("amount2");
				this.coin1 = localStorage.getItem("coin1");
				this.coin2 = localStorage.getItem("coin2");
			}
		},
		applyOptions(selectID, values, optlabel) {
			var optgroup = document.createElement("optgroup");
			for (const i in values) {
				var select = document.getElementById(selectID);
				var option = document.createElement("option");
				option.text = values[i];
				option.value = values[i].toLowerCase();
				select.append(optgroup);
				optgroup.append(option);
			}
			optgroup.label = optlabel;
		},
		filDatalists(data) {
			var coinslist;
			var cryptocoins = data.crypto;
			var fiatcoins = data.fiat;
			cryptocoins.sort();
			fiatcoins.sort();
			coinslist = cryptocoins + fiatcoins;
			coinslist = coinslist.split(",");
			this.applyOptions("coinlist1", cryptocoins, "crytocoins");
			this.applyOptions("coinlist1", fiatcoins, "fiatcoins");
			this.applyOptions("coinlist2", cryptocoins, "crytocoins");
			this.applyOptions("coinlist2", fiatcoins, "fiatcoins");
		},
		convert(amount, coin1, coin2) {
			try {
				coin1 = coin1.toUpperCase();
				coin2 = coin2.toUpperCase();
				amount = parseFloat(amount);

				var coin = eval('convert.' + coin1 + '.' + coin2 + '(' + amount + ')');

				return(coin)
			} catch {
				console.log("Something went wrong.")
			}
		},
		applyConvert(localAmount1, localCoin1, localCoin2) {
			this.amount2 = parseFloat(this.convert(localAmount1, localCoin1, localCoin2));

			this.saveToCache();
		},
		swapCoins() {
			var localAmount1 = this.amount1;
			var localAmount2 = this.amount2;
			var localCoin1 = this.coin1;
			var localCoin2 = this.coin2;

			this.amount1 = localAmount2;
			this.amount2 = localAmount1;
			this.coin1 = localCoin2;
			this.coin2 = localCoin1;

			this.applyConvert(this.amount1, this.coin1, this.coin2);
		},
		saveToCache() {
			localStorage.setItem("amount1", this.amount1);
			localStorage.setItem("amount2", this.amount2);
			localStorage.setItem("coin1", this.coin1);
			localStorage.setItem("coin2", this.coin2);
		}
	},
	components: { InputForm, InputDatalist, IconsFa, Text }
}
</script>

<template>
	<div class="col-sm">
		<InputForm list="coinlist1" id="coin1" v-bind:value='coin1' v-on:input='coin1 = $event.target.value' name="coin1" title="select your first coin" placeholder="Coin symbol" @change="applyConvert(amount1, coin1, coin2);" />
		<InputDatalist :id="'coinlist1'" />
	</div>
	<div class="col-sm">
		<InputForm type="number" :id="'amount1'" v-bind:value='amount1' v-on:input='amount1 = $event.target.value' placeholder="Amount" @change="applyConvert(amount1, coin1, coin2);" />
	</div>

	<div class="col-sm text-center">
		<div class="row">
			<div class="col">
			</div>
			<div class="col">
				<IconsFa class="col" @click="swapCoins()" title="swap coins" icon="fa-exchange" />
			</div>
			<div class="col">
				<IconsFa class="col" @click="applyConvert(amount1, coin1, coin2);" title="refresh coins" icon="fa-refresh" />
			</div>
			<div class="col">
			</div>
		</div>
	</div>

	<div class="col-sm">
		<InputForm list="coinlist2" id="coin2" v-bind:value='coin2' v-on:input='coin2 = $event.target.value' name="coin2" title="select your second coin" placeholder="Coin symbol" @change="applyConvert(amount1, coin1, coin2);" />
		<InputDatalist :id="'coinlist2'" />
	</div>
	<div class="col-sm">
		<InputForm type="number" :id="'amount2'" v-bind:value='amount2' v-on:input='amount2 = $event.target.value' placeholder="Amount" style="cursor: not-allowed" readonly />
	</div>
</template>

<style lang="scss" scoped>
.col-sm {
	margin-bottom: 20px;
}

.icons {
	font-size: 24px
}

</style>