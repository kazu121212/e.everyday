FROM ruby:2.6.5
RUN apt-get update -qq && apt-get install -y postgresql-client
# install nodejs(-v 14.x)
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs
# install yarn
RUN npm install --global yarn \
    && mkdir /work

WORKDIR /work
COPY Gemfile /work/Gemfile
COPY Gemfile.lock /work/Gemfile.lock
RUN bundle install
COPY . /work

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]