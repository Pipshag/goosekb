#!/bin/bash
# source ~/.virtualenvs/zmk-emry/bin/activate
(
  rm -rf fw/
  cd zmk/app/
  west build -p -d ../../fw/left -b seeeduino_xiao_ble -- -DSHIELD=goose_left -DZMK_CONFIG="$(pwd)/../../../config"
)
(
  cd zmk/app/
  west build -p -d ../../fw/right -b seeeduino_xiao_ble -- -DSHIELD=goose_right -DZMK_CONFIG="$(pwd)/../../../config"
)
(
  cd zmk/app/
  west build -p -d ../../fw/reset -b seeeduino_xiao_ble -- -DSHIELD=settings_reset -DZMK_CONFIG="$(pwd)/../../../config"
)
(
  cp -r fw/left/zephyr/zmk.uf2 fw/goose_left.uf2
  cp -r fw/right/zephyr/zmk.uf2 fw/goose_right.uf2
  cp -r fw/reset/zephyr/zmk.uf2 fw/reset_goose.uf2
  rm -rf fw/left
  rm -rf fw/right
  rm -rf fw/reset
)
