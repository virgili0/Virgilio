import os
import subprocess
import argparse
import time
from PIL import Image
from scipy.misc import imread, imsave, imresize


def verify_image(img_file):
     # test image
    try:
        v_image = Image.open(img_file)
        v_image.verify()
        return True;

    except OSError:
        return False;


def jpg_fixer(opt):

   print("\n---> Validating images... \n")

   img_dir = opt.root
   files_count = 0
   corrupted = 0
   to_delete = []
   
   for root, dirs, files in os.walk(img_dir):
      for file in files:

         if file.endswith(".jpg"):
               currentFile = os.path.join(root, file)

               if verify_image(currentFile):
                  if files_count % 500 == 0:
                     print("processed", files_count, "files")
                  files_count += 1

               else:
                  files_count += 1
                  corrupted += 1
                  os.remove(currentFile)
                  print("corrupted file") 
   
   print("\nDeleted", corrupted, "corrupted files out of", files_count)
   time.sleep(3)


def bew_cleaner(opt):
 
    print("\n---> Removing black & white images ...\n")

    color = 0
    bew = 0
    other = 0
    delete = []
    for root, dirs, files in os.walk(opt.root):
      for file in files:
        path = os.path.join(root, file)
        image = imread(path)

        if len(image.shape) < 3:
            bew += 1
            os.remove(path)
            delete.append(file)

        elif len(image.shape)==3:
            color += 1

        else:
            os.remove(path)
            delete.append(file)
            other += 1
        
        seen = color + other + bew
        if seen % 100 == 0:
            print("Progress: {}".format(seen))


    print("Removed {} B&W images and {} files of unknown type out of {}.".format(bew, other, seen))
    time.sleep(2)



def convert_img_type(opt):

    print("\n---> Converting to .jpg ...\n")

    img_dir = opt.root
    seen = 0
    processed = 0

    for root, dirs, files in os.walk(img_dir):
      for file in files:
        seen += 1
        old_path = os.path.join(root, file)
        filename = os.path.splitext(file)[0]
        extension = os.path.splitext(file)[1]
        
        if extension.lower() == ".jpg" or extension.lower() == ".jpeg" :
            pass
        elif extension.lower() == ".png" :
            res = filename + ".jpg"
            im = Image.open(old_path)
            im = im.convert('RGB')
            path = os.path.join(root, res)
            im.save(path, quality=95)
            im.close()
            os.remove(old_path)   
            processed += 1
        else: 
            im.close()
            os.remove(old_path)   
        
        if seen % 100 == 0:
            print("Seen images:", seen)

    print("Converted {} images ouf of {}.".format(processed, seen))
    


def resize(opt):

    img_dir = opt.root
    seen = 0
    new_size = int(opt.resize)
    resized = 0
    removed = 0

    for root, dirs, files in os.walk(img_dir):
        for file in files:
            file_path = os.path.join(root, file)
            seen += 1

            # if file is a .jpg
            try:
                im = Image.open(file_path)
                width, height = im.size
                resized += 1
                # resizing
                im = im.resize((new_size, new_size))
                im.save(file_path)
                im.close()			
                
                if seen % 100 == 0:
                    print("Progress: ", seen)
            # corrupted file
            except:
                os.remove(file_path)
                removed += 1


    print("Resized {} images out of {}.".format(resized, seen))


def min_size(opt):

    img_dir = opt.root
    dim = int(opt.min_size)
    too_small = 0
    processed = 0
    removed = 0

    for root, dirs, files in os.walk(img_dir):
        for file in files:
            file_path = os.path.join(root, file)
            processed += 1
            
            # if the file is a .jpg
            try:
                im = Image.open(file_path)
                width, height = im.size
                # if smaller than size -> delete
                if width < dim and height < dim:
                    too_small += 1				
                    im.close()
                    os.remove(file_path)
                
                if processed % 100 == 0:
                    print("Progress: ", processed)
