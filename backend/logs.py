import logging

def get_logger(name):
    #Gets the name of the root logger
    logger = logging.getLogger(name)
    #Sets level of logger, change this to other levels to allow more severe (less/more) logs
    logger.setLevel(logging.INFO)
    
    #Avoids adding handlers multiple times
    if not logger.handlers:
        #File Path to save logs
        fileHandler = logging.FileHandler("server.log")
        #Formatting for logs
        fileFormat = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s", 
        datefmt="%Y-%m-%d %H:%M:%S")
        #Setting the format
        fileHandler.setFormatter(fileFormat)
        #Adding handler to handlers
        logger.addHandler(fileHandler)

    return logger
