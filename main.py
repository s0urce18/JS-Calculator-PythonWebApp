import eel

if __name__ == '__main__':
	eel.init('web')
	eel.start('index.html', mode="chrome", size=(500, 550))
