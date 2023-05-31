document.addEventListener('DOMContentLoaded', function() {
  const wrapList = document.getElementById('wrap-list');
  const orderList = document.getElementById('order-list');
  const submitOrderButton = document.getElementById('submit-order');

  // Массив с врапами
  const wraps = [
    { name: 'Cesar', price: 450, image: 'https://lh3.googleusercontent.com/LB5g61g77u-cwwErfI5Bjc_ytjHy1wJIDa0g0irrM26qcPAKSJsCG4MPLAmQzYn-hKJlhbQhQle-vYa4jdf053tgtHlqubPqHAGh2altn-5PXxcnsq3n9ybdORYKI4Yv6FTK-4p3pAEVkcjCMOCAlpZlBmOm5_zko_x8iAEPyF4TDJFvm81g53ZmBc77Pk0Cytza3EPQfbzYIbaZLpQqhAjEQVQWCNqayi-XvNoZQUJMnrGYEvtlyegbTf7jpW8DXiaEiGiTJSikW9iQBz4fdqLitaPDayCzvu_uJOC0PeH23xVpLX7h0yuTEiHk9omRSaXaYfHU5lrfjd_N9S4grMqiFzkxVQZ0InutoVOcAujuf2NDZDOXhGKsgM_bdIpBrHVWnDfCkQMA_lE5Dg44YTJzcHUf5b9OdX2AvgcR4YlRwqeLljlIyASEqqSfUDEC1Fl3dXSjrcRrsyNJq2d3SGwes84nw9-QfNTQ4mBTY8EkRrjcqWxOHA_pP1V2HGmSXh7Qt8KhO-ygAo8tmvMMzI8gE_gT-9fm7JJN8FMFMXYdDNFdz9nUSyWHkm6RYtLMO8zokLoen3JMlwtHQb4GrYzJ0007mTo_D8u8fVlKGbryNbRcf9lLhDbtqiCdWEQtBGEvewD-MP_8cI3HI5Dp9aMh05GgFNUwDKDGXKm-0hcQOglg24pQEk_BcBiV4vxvB3ze8hQPgZr5qPdN-cCjKQs4KSEriUxXgPDtlhcXWULHkDSqg8okLz2CuqgaCDXuUOKlJv-4jkeNMVwGZAjR_AVuvmARj9amnYMG8hQM0Eb6GHaeCDhEXOOLPJFFz3q0pe4n4Hdwi5sm_IJdbbuVb88RjCk7rBeR6xq2paBUjLrphb2l19sjnCEKTKrJAUsysHObm_0f_gq1NJAX-cmrgcX1-IIJ3n511oE7FIqfJ7cAZ82yc-eFiwj1OK4V5PGunI2qyyShZDM1QdLjPTJY_LOiWPfkQsu1y09xRt4m3ve4Z_a2hIV5IXZrGGLpEXSuymvp20niSq_l9RMsOjALrOeNCopbwmPI5zdotRIqdq-5zH3yD-KAnoeITUNhPpnOlM7ePUpHdjAlN1FVfyCFWoMqJgbefBBYp4p1xxTNPwFIJe0re4hPhh-HxB6UEiivpnqxfzVQZh9wrDniHPE6WBJH7ntkGMPobfEMa0Fd9UB42a2HpqYL1cQaj8gbYG3Y4tt6RAU=w1080-h1080-s-no?authuser=4' },
    { name: 'Kimchi', price: 400, image: 'https://lh3.googleusercontent.com/V95iV13_51y1lD0HrOMAOxHQHSRpplBU7vK53GxyMxeqXkO81DnhxaPGkQM4Hhyy0x8JFJvZc3TivssZW85tPRASvMV-CccE0n7ibyKxD-BB2DyxgaucaQ1uMYOWzivji-6-EbW81jtk-rcjADSGjfJU1tmHoDB_FZVXe4LhXApXqnGSVtuVKW0EELSPdZd87XGRdt8W6mBVZkOWr9fmWgXaMyvJrfJZs1YopqEnG10Xok651wdiirldmL-4xPQ0JxqKTCILqjXPVa0j3xlL1FDnaGE4OfjDH4b4nwzsO-elGXiOGpzmrBySmldAzhXQa9h0UbPCFx9Es0QiiIrcIlKbBRPvikOaQ05KbomFi5Wxn4neI71ap9RtcmjI9AgCW04FoPQV3nvhjbL8qw8xPGAyPWxUfXsyZcZHD3LGd1MF_s7l_qtLRF2ZvxRL71_EKI3A-xhOaYd6L3okcrcNcP92oyvFBJexcI1xetClI063GyaPSNr70nl961Lq0WBzHQPZ2z_sQwVShYPDX8EZboDle8nO-8n9rt04ICUeZhLWlEOqOk7gYdTf2IT0POeQwL1A82_IpXvGepbYa_y2pF-cd3EuH4tSyrl9jfuNV0-cdrVLX0XOgMBZfD0VIUot4Q1kM9MylDKbL4G_KVru03hSr0tqg2jUeraeETD1KxDyMNL2M9yFvyd1t3wBDzctVNEe-XONn-MCEK0INKieP2otIQ0cryAktTrQybeIj_phjzXrrbC3GYbP0SUxsz7nhRJxPiA0Fpf56izir64LgdAoP1OuwfKDzK6qwGZLElDVUSD7lJLHi2V-jKfrEOuGviyKHyRpKxVLb90o1RNamuAShuldgDfna4EenNxmnMiddDSOubvgipT9JQkwxxjf7cJcKYkJWrKZWkqzhtkne98veqJpEI3xrySvUZg-kOyMp_hZ0nqfqCDUn6vFe5_YsEVqkUez24RV_jA0bBktvfB7-TpVlmtYx4q2bkoa3-LdDRv3LPa2YPXppvj3IeHrl6diNznnr2xmQnMQVirMJ-mXyzQkhlq_qlQ21SCuXtlCzlsD5AoC93RXfnGiFAbrJFI6XHP6tHodcmiypnC6NyrpaUWVyLYst3WaXmV_TVszOTsmowGMPUqSwF8UIwk73boonjpLrnQqPxfLitnkxc1BaRaaKa_pFS4NSweKSVdS_aBLbgw_YA6ILKsI8Q1CuV1Cvek=w1080-h1080-s-no?authuser=4' },
    { name: 'Wrapper', price: 600, image: 'https://lh3.googleusercontent.com/aj6w7ooESWXM_YsezkqWF44xNl4T0Gq8jdZK_nvshMCf99CEK2Pt6PjMFIWVWkRXPDnjIZsQ3KOAtrCghGFf2Kw7lDwPm-JVj8LsZKY4xFK-Bw0_iNnycVFy7r3hXdVp_gJcQPYWS8hUORfhGSxHrjidwtJOHjxQOyhHJCwauANDX8QAoLxFBHq7B529CP4hvsotds3TDeEfuc2CirLgM34Np2UZZLr7oAS2yxx2-dvfVKKQT883WjKQZGQACVeCVNFgEHFXJ4A2qIq0qWRCZvvK7_2OqvduGrilebITLxunzDjgt3Y_oeSwafmUtzv2evJgdFzMSIUoQunM6wDhZ8hx3ijaGJpn1Ikh4w-9uzDui7xMIQQPZ2rM_MYVUISYeBCJWrZ_F523r0VJGV9Zsq28j8nZIOwKxwymkdQaIrQWeZtQuhRa-H6EJn7gXnG2WjUOf4wn39xW9K_If3G-C5NSw0tA3U9Sx14bQlOCQOV1_mLeAgZktrb3Q0K7E-0r8MAf72sn8KFxw1CXgJyPD1NWe0I5PS6FKn1qvaNrnYasDFUREaxL42BWuKp38MzlRRrDDdF2v7jUSG_pcCR8WBcYXOAgPHgUI1Iph4jVvvnt_igQ-i_dBbwPMV_Sf962dph_B3E9-Rr-qGj5X2J9NM2EY3sBXK7S8-VRAGcfxY0lww6ouFPQtxRec33_xDCINBvozrEeedIR3GnDPHEGUycTtzqLpWlpPYj8jfuCgQdjsHgnqrDy_KaFlWWQfa_OnMZnfiDNFGjv5TimNYh-MwoarhvzwaKcRgPxMGmzB4PjxQ5RKT1i88uUmd0ktZ4PC-1OOcVDmRb9ceSIdxt20Al8p08FgzhyGJp9JKshUpsXpdxcF9X-DaTKZjSPxHQ4WvwSEpnarX0E5HEaOKbPRULbuy9r7uaNwUy3nbDfwXnvW8UuWjJ3yoeuhknBMYgmseH9jqs7rrNeFY0Xih3RtaXtq8-zveMaYTZgzriQuSWsFpX3tpgHHftFGft0NQEM9bpV5sJSL09YoK_65Yjn7r8Srih1IAjHUxFi5P3extUzLUk-TAEdCtthjCqD1Zj4CXwxLMwyrUvwl9eoAEqRBRfAEuMJd6s7WIcHnN9Kpm_qGkdce2BhhYoPz3U3AIpIKN9iDbh5E128E3n-8viIXcZ6H-ZlAF4jNb0Iiju5UPHIiQgUk8G8FTCuuqXiRYgxX5rfkCk=w1080-h1080-s-no?authuser=4' },
    { name: 'Morning', price: 400, image: 'https://lh3.googleusercontent.com/HA2xeTOVVzxBDLT_j1ztC_NR0cfcbMQVa_4A4duDn9r3c51z-FjlBgLLIQd7hT0kzJ_EG2S0jPA357HUx_-em8UljZlypNu9pFWee6l2bwvtbwcSCDQ6o8pMqMrRwv1BFHBL_trsaVrYsALgcChES2Isbhzm3t5f7-2FOGiYoOwZ04OAYwgEVuwBYVTQz4RqnORVo_OnrRb7AgTlPm11YeY1-fT0FujT6ycxk9FO9DjSGnBW8BOnAXloQ1IZmIOyJxVWEJqhl2jeWVVSEI-HjGz2y-y8OAv5GUXZil2TandH-zyS5m581dxvf-25442XhyWcSIUcSeIbNezvfEuIGdj7Zvv6TorudaZLDHCRBj6ks6x9af1Mf_w9i-L3Suspy-aNM-HvyUR1dD7y8J70TP8sbG3axWtt6vg2sObZD5_78JOWyHRFLkvJu6kO6Xr_q2v_fVmJLfzXp7xMY0Vj5wCvFZauhTtTMQp1DRAHp88i-QoPa54_6IgpGIyYuiBo1mZxvU2XAMi-Pd6rjrcRdqcCXP1CliVV125ulATp9WHjym-jmYXthCNQw0jgv1jISBDaFFetrVzSj67ogzxWgS1C7jLSbzm98eSdU524XKSW9hYhrDG75NdDZIwrCHavYhTiwG6EybPHc0wds86JzOBlJmhxF3IhprmbjT_f1-CvKfEAjBV1titRqXVcc2BmNhMxUSslcGwA2GrlWLAvMOwtSGjZuuYja1UUtKgvmpEPcPKvsS2XZDgJSokFCGEd1VVJFdG0KFR_xxyh7WjsUByxchZyrDV2blRwIV1Hq5bkoruXFpEaWxR8AiyFLzaySNWqb7Kg1tM0-rFU1RjuZv_r1xAgxEgjDerInYT8FLOFyfDSe23Y4HS1Ed725xlTGSHxU1SzYHG6D4aIuRS9Qd7mSoWgy9mvITYVM7mnfGI-sRmnVGzUXySjHLa9ErvjKnd9yreEGWXwYXsuireTRfRiZklJG9vuNszonAgrQ9U1bcMLaV-BC7oO9KLZtgvFBvl8E1vXN7n6msz530yN9FtdbkqQKzlLjQ-z4sInYz2Bqs8cSA__BqfUqJbmjJ3mWRkOuf5bKTf_9ivwLwmcmfQ_lNLbkwDOu2UZgdLQdbM6DuE2rCNrh-eQ5Zi9WQVlAK6JPCiorXNJOuZpi2ZddWrRiLLLb011adBTUkO1gG42KBVJ5-OfoLSgPh5B6mknkCY46oA=w1080-h1080-s-no?authuser=4' },
    { name: 'Pesto', price: 350, image: 'https://lh3.googleusercontent.com/NUZllMHQxClqN5QYgUCPqcHS1IqPK8lLq9lk5S6FtgCTtGSjBX9dEtNvqeurNTfwrvXUuYMysd0tQZugVJHrJOB-W2P4vMwMuHwkqbIK4z0w4zMCbVg30FBv7XSJDkg3Z03Yw9_eZ9dL0WgU5PYMGjvThA7qoSJDTo0ssL-TaeIxZGLe7LlWmekr5ANnYvq4gI4KcYAuxV8CiIyZWtaRMAmMIQX0zBLMIVebjNDcHVR7g5GJRHZewKPOVa7RfXPoY1LGQHSlPEAMrVEp_Mvrmx_B1nbFdSZVYcf_O1LekSYvemlHglNu4WfNlMK_KWUQZYdyvFCMGGfk9biMGJ2DmnfYuwK98EwCsWLjLH8qtD1E0DN_vpAqJxCFQslO4IHNTXkoRBTTPXpyD2vTctpapDlD9_7NzvShL6OI49bJNXsl_CHn4petQPRM3nuNtGV_Tb5OuruMet15A7gsN-1SwTUnyHqbr1Qi5_j7oMEgdLmipZLFztvYyGvWWafrbtL4grLP8fbfLgysz7hF38CJSH55j0gR8PSueE0nwBks5fI3qqKu8bC5IEC_dSyEAyGjr_iyakL49vVeIh_UBifGO9tdQsImHALlYA3mBrRhNyphpkrdgmZrJWrp4fVoME7RqeRtjpK7RIoI7UEjbbBxHAvasMUBQqoJBvQgBt42ddeAOxFQ9GPq7o_kBJFs5VYpcOgTjswoQppHTXsInZFheZuMT3CS-Ku1Wxvcky-AI4lmcOPFZe7po-7CeiYtN0vCPxzOCDzE47kzMoKIoARb9tbgTcveNtQSE9492Nxobd4W1VeIvx5k9SZ_mp9_fL6zH_PsryTR54elxu6oo5N7rR-LUtm8u5Q3oR_dYRA4RTd-z0079F_VLFBDrryyBp51kI4en8JrSLpWbuXCIX11Ga-vylgDfqYhO1BY8eBqexnWkTDrboOhtb1VK8I_hp9qmZDCAz8z2Dl6aO26SZ8f7W9PfI0Xn2vtaH9ofaSSBzuwRdKago53mYGyu5W4xk7J3dwOhPEXRUimImo6anqY0RzM9-tY0pc8kvgPbRmAyupafPhhypuDdvHHTZpHHoUNKyvW6-FwlRDzpWG0tJXU247aFTvnOXsGf8Ugeh4Fq5fWwxjs3j1qAxQ4wn1lh2X6JGwsHJ1rIKflHb2zvRYVDE7-n7HBuLFyNCIEguSZZhgzmXeeLVb9stdxQ9x8rEWGm3abg7Y=w1080-h1080-s-no?authuser=4' }
  ];

  // Отображение врапов в меню
  wraps.forEach(function(wrap) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = wrap.image;
    img.alt = wrap.name;
    li.appendChild(img);
    const namePrice = document.createElement('div');
    namePrice.classList.add('name-price');
    const name = document.createElement('span');
    name.innerText = wrap.name;
    const price = document.createElement('span');
    price.innerText = wrap.price + ' руб';
    namePrice.appendChild(name);
    namePrice.appendChild(price);
    li.appendChild(namePrice);
    li.addEventListener('click', function() {
      const orderLi = document.createElement('li');
      orderLi.innerHTML = `
        <div class="order-item">
          <img src="${wrap.image}" alt="${wrap.name}">
          <div class="order-details">
            <span>${wrap.name}</span>
            <span>${wrap.price} руб</span>
            <div class="add-ons">
              <label>
                <input type="checkbox" name="add-on" value="cheese"> Сыр
              </label>
              <label>
                <input type="checkbox" name="add-on" value="bacon"> Бекон
              </label>
              <label>
                <input type="checkbox" name="add-on" value="jalapenos"> Халапеньо
              </label>
            </div>
            <div class="sauces">
              <label>
                <input type="checkbox" name="sauce" value="ketchup"> Кетчуп
              </label>
              <label>
                <input type="checkbox" name="sauce" value="mayo"> Майонез
              </label>
              <label>
                <input type="checkbox" name="sauce" value="mustard"> Горчица
              </label>
            </div>
          </div>
        </div>
      `;
      orderList.appendChild(orderLi);
    });
    wrapList.appendChild(li);
  });

  // Обработчик кнопки "Отправить заказ"
  submitOrderButton.addEventListener('click', function() {
    const orderItems = orderList.getElementsByClassName('order-item');
    let totalPrice = 0;
    let orderDetails = '';
    for (let i = 0; i < orderItems.length; i++) {
      const item = orderItems[i];
      const name = item.querySelector('.order-details span').innerText;
      const priceText = item.querySelector('.order-details span:nth-child(2)').innerText;
      const price = parseInt(priceText);
      const addOns = Array.from(item.querySelectorAll('.add-ons input[name="add-on"]:checked')).map(checkbox => checkbox.value);
      const sauces = Array.from(item.querySelectorAll('.sauces input[name="sauce"]:checked')).map(checkbox => checkbox.value);
      totalPrice += price;
      orderDetails += `- ${name} (${priceText})\n`;
      if (addOns.length > 0) {
        orderDetails += `  - Доп. ингредиенты: ${addOns.join(', ')}\n`;
      }
      if (sauces.length > 0) {
        orderDetails += `  - Соусы: ${sauces.join(', ')}\n`;
      }
    }
    alert(`Ваш заказ отправлен!\n\nСумма заказа: ${totalPrice} руб\n\nДетали заказа:\n${orderDetails}`);
    orderList.innerHTML = '';
  });
});
