#!/bin/bash
(
	rm -rf fw/
	cd zmk/app/
	west build -p -d ../../fw/left -b seeeduino_xiao_ble -- -DSHIELD=goose_left -DZMK_CONFIG="/home/pipshag/Sources/goosekb/firmware/config"
)
(
	cd zmk/app/
	west build -p -d ../../fw/right -b seeeduino_xiao_ble -- -DSHIELD=goose_right -DZMK_CONFIG="/home/pipshag/Sources/goosekb/firmware/config"
)