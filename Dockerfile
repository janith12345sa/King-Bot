FROM ravindu01manoj/sewqueen:lovegift

RUN git clone https://github.com/janith12345sa/King-Bot.git /root/King-Bot
WORKDIR /root/King-Bot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "sew.js"]
